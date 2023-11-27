import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card,
  CardBody,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'reactstrap';
import UserCard from '../components/UserCard';
import { deleteUser, editUser, getUsers } from '../features/userDetailsSlice';
import { v4 as uuidv4 } from 'uuid';

const Users = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((app) => app.user.users);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const onEdit = (user) => {
    console.log('edit', user);
    dispatch(editUser(user));
  };

  const onDelete = (user) => {
    dispatch(deleteUser(user.id));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const filteredUsers = usersList
    .filter((user) => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedGender || user.gender.toLowerCase() === selectedGender.toLowerCase())
    );

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
    setCurrentPage(1);
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="6" className="mb-3 mt-3">
          <Input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="6" className="mb-3">
          <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle caret>
              {selectedGender ? `Filter: ${selectedGender}` : 'Filter by Gender'}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={() => handleGenderChange(null)}>All Genders</DropdownItem>
              <DropdownItem onClick={() => handleGenderChange('male')}>Male</DropdownItem>
              <DropdownItem onClick={() => handleGenderChange('female')}>Female</DropdownItem>
              <DropdownItem onClick={() => handleGenderChange('others')}>Others</DropdownItem>

            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>

      {currentUsers.map((user, index) => (
        <UserCard user={user} onEdit={onEdit} onDelete={onDelete} key={index} id={uuidv4()} />
      ))}

      <Card>
        <CardBody>
          <Pagination>
            {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }).map((_, index) => (
              <PaginationItem key={index} active={index + 1 === currentPage}>
                <PaginationLink onClick={() => paginate(index + 1)}>{index + 1}</PaginationLink>
              </PaginationItem>
            ))}
          </Pagination>
        </CardBody>
      </Card>
    </div>
  );
};

export default Users;

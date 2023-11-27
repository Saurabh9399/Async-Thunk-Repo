// DragDropComponent.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableItem = ({ id, text, index, moveItem }) => {
  const [, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemTypes.ITEM,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} style={styles.draggableItem}>
      {text}
    </div>
  );
};

const styles = {
  draggableItem: {
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: '#f0f0f0',
    cursor: 'move',
  },
};

export default DraggableItem;

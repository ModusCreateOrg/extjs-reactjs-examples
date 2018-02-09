import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const listCtStyle = {
  width: '200px',
  margin: '12px'
};

const reorder =  (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class App extends Component {
  state = {
    items: [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }] 
  }

  onDragEnd = (result) => {
    // dropped outside the list
    if(!result.destination) {
       return; 
    }
    
    const items = reorder(
      this.state.items, 
      result.source.index, 
      result.destination.index
    );
    
    this.setState({
      items
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, { isDraggingOver }) => (
            <div 
              ref={provided.innerRef} 
              style={{
                background: (isDraggingOver ? '#ffe1e3' : null),
                ...listCtStyle
              }}
              className="list-ct"
            >
              {this.state.items.map(({ id }) => (
                <Draggable key={id} draggableId={id}>
                  {(provided, { isDragging }) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        className="list-item"
                        {...provided.dragHandleProps}
                        style={{
                          background: (isDragging ? '#a7101b' : null),
                          ...provided.draggableProps.style
                        }}
                      >
                        ITEM {id}
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default App;

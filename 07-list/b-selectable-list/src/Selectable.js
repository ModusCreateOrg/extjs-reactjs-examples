import React from 'react'
import './Selectable.css';

function selectable (List) {
  return class SelectableList extends List {
    buildItem (item) {
      const node = super.buildItem(item);
      const { selected = [] } = this.state;
      let className = 'list-item';
      if (selected.includes(item.id)) {
        className = `${className} list-item-selected`;
      }
      return React.cloneElement(node, { className });
    }
    onItemClick (toSelect, e) {
      super.onItemClick(toSelect, e);
      const { data, selection, onSelection } = this.props;
      let { selected = [] } = this.state;
      let add = true;
      if (selection === 'multi') {
        const last = selected[ selected.length - 1 ];
        if (last != null) {
          const lastIdx = data.findIndex(item => item.id === last);
          const currentIdx = data.findIndex(item => item.id === toSelect.id);
          if (lastIdx === currentIdx) {
            // indices are the same, deselect
            selected.splice(currentIdx - 1, 1);
            add = false;
          }
          if (e.shiftKey) {
            if (lastIdx !== -1 && currentIdx !== -1) {
              // get all items between the last selected item
              // and the current clicked item
              if (lastIdx < currentIdx) {
                for (let i = lastIdx + 1; i < currentIdx; i++) {
                  selected.push(data[ i ].id);
                }
              } else {
                for (let i = lastIdx - 1; i > currentIdx; i--) {
                  selected.push(data[ i ].id);
                }
              }
            }
          } else if (!e.ctrlKey) {
            // shift or ctrl keys were not pressed, need to clear out
            // so only the item being clicked on is deselected
            selected.length = 0;
          }
        }
      } else {
        // single mode, clear out the array
        selected.length = 0;
      }
      if (add) {
        selected.push(toSelect.id);
      }
      if (selected.length > 1) {
        // remove duplicates
        selected = [ ...new Set(selected) ];
      }
      this.setState({
        selected
      });
      if (typeof onSelection === 'function') {
        onSelection(selected.map(id => data.find(item => item.id === id)));
      }
    }
  }
}
export default selectable;


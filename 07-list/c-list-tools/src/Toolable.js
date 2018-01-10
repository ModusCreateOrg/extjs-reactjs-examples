import React from 'react';
import './Toolable.css';

function toolable (List) {
  return class ToolableList extends List {
    tools = {
      disclosure: {
        cls: 'fa fa-arrow-right',
        prop: 'disclosure'
      }
    }
    buildItem (item) {
      const node = super.buildItem(item);
      const tools = this.buildTools();
      return tools.length ?
        (
          <div key={item.id} className={this.getItemClassName(item)}>
            {
              React.cloneElement(node, {
                className: 'list-data'
              })
            }
            <div className="list-tools">
              { tools.map(name => this.buildTool(name, item)) }
            </div>
          </div>
        ) :
        node;
    }
    getItemClassName (item) {
      const className = super.getItemClassName(item);
      const tools = this.buildTools();
      return tools.length ? `${className} list-item-tooled` : className;
    }
    buildTools () {
      const { props, tools} = this;
      const items = [];
      for (const name in tools) {
        const cfg = tools[ name ];
        if (props[ cfg.prop ]) {
          items.push(name);
        }
      }
      return items;
    }
    buildTool (name, item) {
      const { tools: { [ name ] : cfg } } = this;
      return <div
        key={`list-tool-${item.id}`}
        className={`list-tool ${cfg.cls}`}
        onClick={this.onToolClick.bind(this, item, cfg)}
      />;
    }
    onToolClick = (item, tool) => {
      const { props: { [ tool.prop ]: cfg } } = this;
      if (typeof cfg === 'function') {
        cfg(item);
      }
    }
  }
}
export default toolable;


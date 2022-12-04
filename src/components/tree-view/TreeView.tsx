import React, {FC, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {
  Tree,
  MultiBackend,
  getBackendOptions, NodeModel
} from '@minoru/react-dnd-treeview';

interface TreeViewProps {
  items: NodeModel[];
  rootId?: number;
  canDropAndDrag?: boolean
  onDrop?: Function,
}

const TreeView: FC<TreeViewProps> = (props) => {
  return (
    <div>
      <DndProvider
        backend={MultiBackend}
        options={getBackendOptions()}
      >
        <Tree
          tree={props.items}
          render={(node, {depth, isOpen, onToggle}) => (
            <div style={{ marginInlineStart: depth * 10 }}>
              {node.droppable && (
                <span onClick={onToggle}>{isOpen ? "[-]" : "[+]"}</span>
              )}
              {node.text}
            </div>
          )}
          onDrop={props.onDrop as Function}
          canDrag={() => !!props.canDropAndDrag}
          canDrop={() => !!props.canDropAndDrag}
          enableAnimateExpand
          rootId={props.rootId as number}
        />
      </DndProvider>
    </div>
  );
};

TreeView.defaultProps = {
  rootId: 0,
  canDropAndDrag: false,
}

export {TreeView};

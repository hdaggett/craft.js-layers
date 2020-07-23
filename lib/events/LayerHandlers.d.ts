import { Node, DerivedEventHandlers } from '@craftjs/core';
import { LayerIndicator } from 'interfaces';
import { ConnectorsForHandlers, CraftDOMEvent } from '@craftjs/utils';
export declare class LayerHandlers extends DerivedEventHandlers<'layer' | 'layerHeader' | 'drag'> {
    private id;
    private layerStore;
    static draggedElement: any;
    static events: {
        indicator: LayerIndicator;
        currentCanvasHovered: Node;
    };
    static currentCanvasHovered: any;
    constructor(store: any, derived: any, layerStore: any, layerId: any);
    getLayer(id: any): any;
    handlers(): {
        layer: {
            init: (el: any) => void;
            events: [string, (e: CraftDOMEvent<Event>, opts: any) => void, boolean][];
        };
        layerHeader: {
            init: (el: any) => void;
        };
        drag: {
            init: (el: any) => () => void;
            events: [string, (e: CraftDOMEvent<Event>, opts: any) => void, boolean][];
        };
    };
}
export declare type LayerConnectors = ConnectorsForHandlers<LayerHandlers>;

import React from 'react';
import { NodeId } from '@craftjs/core';
import { LayerConnectors } from 'events/LayerHandlers';
export declare type LayerContext = {
    id: NodeId;
    depth: number;
    connectors: LayerConnectors;
};
export declare const LayerContext: React.Context<LayerContext>;

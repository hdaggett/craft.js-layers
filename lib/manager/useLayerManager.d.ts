import { useCollector } from '@craftjs/utils';
import { LayerState } from '../interfaces';
import { LayerMethods } from './actions';
export declare function useLayerManager(): useCollector<typeof LayerMethods, null>;
export declare function useLayerManager<C>(collector?: (state: LayerState) => C): useCollector<typeof LayerMethods, null, C>;

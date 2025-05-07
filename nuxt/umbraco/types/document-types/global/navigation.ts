import type { IImageMediaPicker } from '~/umbraco/types/data-types/image-media-picker';
import type { IMultiUrlPicker } from '~/umbraco/types/data-types/multi-url-picker';

export interface INavigation {
	logo: IImageMediaPicker;
	links: IMultiUrlPicker;
}

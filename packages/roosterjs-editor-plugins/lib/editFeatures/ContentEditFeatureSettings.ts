import AutoLinkFeatureSettings from './features/autoLinkFeatures';
import ListFeatureSettings from './features/listFeatures';
import NoCycleCursorMoveFeatureSettings from './features/noCycleCursorMove';
import QuoteFeatureSettings from './features/quoteFeatures';
import ShortcutFeatureSettings from './features/ShortcutFeatures';
import StructuredNodeFeatureSettings from './features/structuredNodeFeatures';
import TableFeatureSettings from './features/tableFeatures';

/**
 * A list to specify whether each of the listed content edit features is enabled
 */
export default interface ContentEditFeatureSettings
    extends AutoLinkFeatureSettings,
        ListFeatureSettings,
        NoCycleCursorMoveFeatureSettings,
        QuoteFeatureSettings,
        ShortcutFeatureSettings,
        StructuredNodeFeatureSettings,
        TableFeatureSettings {}
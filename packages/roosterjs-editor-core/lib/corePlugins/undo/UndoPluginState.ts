import UndoSnapshotsService from '../../interfaces/UndoSnapshotsService';

/**
 * The state object for UndoPlugin
 */
export default interface UndoPluginState {
    /**
     * Snapshot service for undo, it helps handle snapshot add, remove and retrive
     */
    snapshotsService: UndoSnapshotsService;

    /**
     * Whether restoring of undo snapshot is in proguress.
     */
    isRestoring: boolean;

    /**
     * Whether there is new content change after last undo snapshot is taken
     */
    hasNewContent: boolean;

    /**
     * A function to get current content from editor
     */
    getContent: () => string;

    /**
     * A function to set content to editor
     */
    setContent: (content: string) => void;

    /**
     * The outer undo snapshot taken by addUndoSnapshot() before callback function is invoked.
     * If addUndoSnapshot() is called nested in another one, this will be the snapshot taken from the outer one
     * and used for checking if it is a nested call
     */
    outerUndoSnapshot: string;
}

import 'ezzy-modal';

interface ModalNames {
    'language': 'Language modal';
}

declare module 'ezzy-modal' {
    export interface EzzyModalExtraNames extends ModalNames { }
}
import 'ezzy-modal';

interface ModalNames {
    'language': 'Language modal';
    'formSubmit': "Submit form modal"
}

declare module 'ezzy-modal' {
    export interface EzzyModalExtraNames extends ModalNames { }
}
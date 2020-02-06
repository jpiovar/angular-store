import { State } from '@ngxs/store';

export interface DocumentStateModel {
  id: string;
  doc: string;
}

@State<DocumentStateModel>({
  name: 'document', // required
  defaults: { // optional: DocumentStateModel
    id: '',
    doc: 'Select an existing document or create a new one to get started'
  }
})
export class DocumentState { }

@State<string[]>({
  name: 'documentList',
  defaults: ['']
})
export class DocumentListState { }

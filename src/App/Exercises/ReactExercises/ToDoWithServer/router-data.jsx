import { ToDoWithServer } from '.';

export const ToDoWithServerMetaData = {
  // eksportujemy meta dane
  path: 'etodo-with-server', // klucz path - na jakim adresie url cwiczenie bedzie sie znajdowac
  date: '29-09-2023',
  linkLabel: 'Zadanie związane z stworzeniem Todo listy z komunikacją z serwerem', // opis widoczny na liscie cwiczen
  blockNo: 36, // przy jakim bloku bedziemy  pracowac
  element: <ToDoWithServer />, // przekazany komponent importowany który bedzie renderowany
  tags: ['components', 'import', 'export'], //
};

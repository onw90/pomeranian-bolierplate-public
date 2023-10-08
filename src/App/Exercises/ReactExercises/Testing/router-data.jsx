import { TestingToDoList } from '.';

export const TestingMetaData = {
  // eksportujemy meta dane
  path: 'testing', // klucz path - na jakim adresie url cwiczenie bedzie sie znajdowac
  date: '08-10-2023',
  linkLabel: 'Testowanie', // opis widoczny na liscie cwiczen
  blockNo: 42, // przy jakim bloku bedziemy  pracowac
  element: <TestingToDoList />, // przekazany komponent importowany który bedzie renderowany
  tags: ['components', 'import', 'export'], //
};

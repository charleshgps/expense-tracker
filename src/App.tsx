import { useState, useEffect } from 'react';
import * as C from "./App.style";
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'

const App = () => {
  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilterList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> Sistema Financeira </C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de Infformações */}

        {/* Area de Inserção */}

        <TableArea></TableArea>
      </C.Body>
    </C.Container>
  );
}

export default App;
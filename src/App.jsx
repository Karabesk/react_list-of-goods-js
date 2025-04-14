import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';
import { Goods } from './components/Goods/goods';

const SORT_FIELD_ALPH = 'Alpabethically';
const SORT_FIELD_LENGTH = 'Lenght';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  let visibleGoods = [...goodsFromServer];

  const [sortAlphbetically, setSortalphAbetically] = useState('');
  const [sortLength, setSortLength] = useState('');
  const [reversed, setReversed] = useState(false);

  if (sortAlphbetically) {
    visibleGoods = visibleGoods.sort((good1, good2) =>
      good1.localeCompare(good2),
    );
  }

  if (sortLength) {
    visibleGoods = visibleGoods.sort(
      (good1, good2) => good2.length - good1.length,
    );
  }

  if (reversed) {
    visibleGoods = [...visibleGoods].reverse();
  }

  const sortAlphbetFunc = () => {
    setSortalphAbetically(SORT_FIELD_ALPH);
    setSortLength('');
  };

  const sortLengthFunc = () => {
    setSortLength(SORT_FIELD_LENGTH);
    setSortalphAbetically('');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn(['button', 'is-info'], {
            'is-light': !sortAlphbetically,
          })}
          onClick={() => sortAlphbetFunc()}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn(['button', 'is-success'], {
            'is-light': !sortLength,
          })}
          onClick={() => sortLengthFunc()}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn(['button', 'is-warning'], {
            'is-light': !reversed,
          })}
          onClick={() => setReversed(!reversed)}
        >
          Reverse
        </button>

        <button
          type="button"
          className={cn(['is-danger', 'button', 'is-light'], {
            'is-hidden': !reversed && !sortLength && !sortAlphbetically,
          })}
          onClick={() => {
            setSortLength('');
            setSortalphAbetically('');
            setReversed(false);
          }}
        >
          Reset
        </button>
      </div>

      <Goods goods={visibleGoods} />
    </div>
  );
};

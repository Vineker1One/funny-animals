import React, { useState } from 'react';
import './Games.css';

const gamesData = [
  {
    id: 1,
    title: 'Игра 1 «Один — много»',
    src: 'https://learningapps.org/show.php?id=p2zzb2zj520',
    rule: 'Составь пары картинок: один предмет — много предметов. Четко проговаривай звук [С]',
    hint: 'Словарь игры «Один — много» для автоматизации звука [С] в словах: Сова — совы, суп — супы, сок — соки, сумка — сумки, салат — салаты, собака — собаки.'
  },
  {
    id: 2,
    title: 'Игра 2 «Один — много 2»',
    src: 'https://learningapps.org/show.php?id=patkav0d220',
    rule: 'Составь пары картинок: один предмет — много предметов. Четко проговаривай звук [С]',
    hint: 'Словарь игры «Один — много» для автоматизации звука [С] в середине слов: Коса — косы, лиса — лисы, оса — осы, косынка — косынки, косуля — косули, колбаса — колбасы, песок — пески.'
  },
  {
    id: 3,
    title: 'Игра 3 «Один — много 3»',
    src: 'https://learningapps.org/show.php?id=ph5waxiba20',
    rule: 'Составь пары картинок: один предмет — много предметов. Четко проговаривай звук [С]',
    hint: 'Словарь игры «Один — много» для автоматизации звука [С] в начале слова: Строитель — строители, скрепка — скрепки, скала — скалы, спутник — спутники, ступенька — ступеньки, скрипач — скрипачи, стриж — стрижи.'
  },
  {
    id: 4,
    title: 'Игра 4 «Один — много 4»',
    src: 'https://learningapps.org/watch?v=p1xvwupst20',
    rule: 'Составь пары картинок: один предмет — много предметов. Четко проговаривай звук [С]',
    hint: 'Словарь игры «Один — много» для автоматизации звука [С] в словах со стечением согласных: Ласточка — ласточки, мост — мосты, аист — аисты, пастух — пастухи, миска — миски, доска — доски.'
  },
  { id: 5,
    title: 'Игра 5 «Найди лишнее слово»',
    src: 'https://learningapps.org/show.php?id=pruyjfq0t20',
    rule: 'Прочитай слова или повтори за взрослым. Следи за произношением звука [С]. Какое слово лишнее? Почему? Выбери ответ.',
    hint: 'Словарь игры «Найди лишнее слово» для  автоматизации звука [С] в словах: Солонка, соломка, соль, солить  (лишнее соломка). Сыр, сыровар, самовар, сырок (лишнее самовар). Суд, сундук, судебный, судья (лишнее сундук).'
  },
  { id: 6, title: 'Игра 6 «Превращай-ка»', src: 'https://learningapps.org/watch?v=phw3160p520' },
  { id: 7, title: 'Игра 7 «Найди слово»', src: 'https://learningapps.org/show.php?id=p19gu68pj20' },
  { id: 8, title: 'Игра 8 «Найди слово 2»', src: 'https://learningapps.org/show.php?id=pbdehje3k20' },
  { id: 9, title: 'Игра 9 «Найди слово 3»', src: 'https://learningapps.org/show.php?id=pd4e6g6nt20' },
  { id: 10, title: 'Игра 10 «Найди слово 4»', src: 'https://learningapps.org/show.php?id=p36kh8b3320' },
  { id: 11, title: 'Игра 11 «Найди слово 5»', src: 'https://learningapps.org/show.php?id=p1iu9a35k20' },
  { id: 12, title: 'Игра 12 «Сыщик»', src: 'https://learningapps.org/watch?v=p36kh8b3320' },
  { id: 13, title: 'Игра 13 «Где звук?»', src: 'https://learningapps.org/show.php?id=pan3a9y0520' },
  { id: 14, title: 'Игра 14 «Угадай-ка»', src: 'https://learningapps.org/watch?v=ptgdo3s4a20' },

];


function Games() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setShowHint(false);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div>
  
      <div className="game-buttons">
        {gamesData.map((game) => (
          <button 
            key={game.id} 
            onClick={() => handleGameSelect(game)} 
            className="game-select-button"
          >
            {game.title}
          </button>
        ))}
      </div>

      {selectedGame && (
        <div className="game-container">
          <h3>{selectedGame.title}</h3>
          <iframe 
            src={selectedGame.src} 
            title={selectedGame.title} 
            width="100%" 
            height="500px" 
            style={{ border: 'none' }}
          ></iframe>
          
          <p className="game-rule">{selectedGame.rule}</p>

          {selectedGame.hint && (
            <>
              <button className="hint-button" onClick={toggleHint}>
                {showHint ? 'Скрыть подсказку' : 'Показать подсказку'}
              </button>
              {showHint && <p className="hint">{selectedGame.hint}</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Games;
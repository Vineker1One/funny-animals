import React from 'react';
import './Roditelyam.css';

function Roditelyam() {
  return (
    <div className="content-container roditelyam-container container py-5">
      <h2 className="text-center mb-4">Для родителей</h2>
      <p className="text-center lead mb-5">
        Перед покупкой тарифа «Всё включено» родителям рекомендуется заполнить диагностическую карту, которая покажет предварительный диагноз речевого нарушения ребёнка, а также даст рекомендации по коррекционной работе.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title text-center text-primary mb-3">ТАРИФ "Всё включено"</h3>
              <h4 className="text-center text-muted">700 руб. в месяц</h4>
              <ul className="list-unstyled mt-3">
                <li>Доступ ко всем играм</li>
                <li>Выбор масок (по желанию ребенка)</li>
                <li>Мастер-классы, тренинги</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <h4 className="text-info">СПОСОБЫ ОПЛАТЫ</h4>
      </div>
    </div>
  );
}

export default Roditelyam;
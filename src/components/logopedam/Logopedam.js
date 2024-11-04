import React from 'react';
import './Logopedam.css';

function Logopedam() {
  return (
    <div className="content-container logopedam-container container py-5">
      <h2 className="text-center mb-4">Для логопедов</h2>
      <p className="text-center lead mb-5">
        Для логопедов предлагается два тарифа, которые составлены с учетом запросов:
      </p>

      <div className="row justify-content-center">
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center text-primary mb-3">ТАРИФ "КОШКИН ДОМ"</h3>
              <h4 className="text-center text-muted">200 руб. в месяц</h4>
              <ul className="list-unstyled mt-3">
                <li>Доступ к демонстрационному варианту игр по разделам:</li>
                <li>- Звукопроизношение</li>
                <li>- Словарный запас</li>
                <li>- Грамматический строй</li>
                <li>- Связная речь</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-5 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center text-success mb-3">ТАРИФ "ЛЕСНЫЕ ДРУЗЬЯ"</h3>
              <h4 className="text-center text-muted">500 руб. в месяц</h4>
              <ul className="list-unstyled mt-3">
                <li>Доступ ко всем играм</li>
                <li>Выбор масок (по желанию ребенка)</li>
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

export default Logopedam;
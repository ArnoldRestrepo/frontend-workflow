import React from 'react';
import iconType from '../iconType.svg';
import iconClock from '../iconClock.svg';

const ServiceDetail = () => {
  return (
    <section className='Detail'>
      <h1 className='Detail__title'>Detalle del servicio</h1>
      <article className='Detail__item l-col-3'>
        <div className='Icon'>
          <h4 className='Icon__title'>Cliente</h4>
          <img
            className='Icon__img'
            src='https://i.picsum.photos/id/1025/367/267.jpg?hmac=xlFGYDf9CLQQCJ2NTBxS8qTTOLkD28zsznZAt9XFCJw'
            alt='Pug Dog'
          />
          <p className='Icon__text'>Perrito Pug</p>
        </div>
        <div className='Icon'>
          <h4 className='Icon__title'>Tipo</h4>
          <img className='Icon__img' src={iconType} alt='Pug Dog' />
          <p className='Icon__text'>Carry</p>
        </div>
        <div className='Icon'>
          <h4 className='Icon__title'>Modalidad</h4>
          <img className='Icon__img' src={iconClock} alt='Pug Dog' />
          <p className='Icon__text'>8 Horas</p>
        </div>
      </article>
      <hr className='Line' />
      <article className='MainData l-col-2'>
        <div className='Data'>
          <h4 className='Data__title'>Fecha:</h4>
          <p className='Data__text'>20-06-2020</p>
        </div>
        <div className='Data'>
          <h4 className='Data__title'>Valor:</h4>
          <p className='Data__text'>20-06-2020</p>
        </div>
        <div className='Data'>
          <h4 className='Data__title'>Ciudad:</h4>
          <p className='Data__text'>20-06-2020</p>
        </div>
        <div className='Data'>
          <h4 className='Data__title'>Ganancia:</h4>
          <p className='Data__text'>$4.000</p>
        </div>
      </article>
    </section>
  );
};

export default ServiceDetail;

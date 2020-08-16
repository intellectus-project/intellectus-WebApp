import React from 'react';
import { Table, Icon, Tooltip } from 'antd';
import './_style.scss';

const NewEventsTable = data => {
  const dataSource = [
    {
      title: 'Escándalo en España: un audio y piden seis ascensos - Olé',
      url:
        'https://www.ole.com.ar/futbol-internacional/escandalo-espana-audio-ascensos-lio_0_lkjk2vhki.html',
      created: '2020-08-04'
    },
    {
      title:
        'Efecto acuerdo: el dólar MEP registró su mayor retroceso diario en más de 3 meses (cayó $5,72) - ámbito.com',
      url:
        'https://www.ambito.com/finanzas/dolar/efecto-acuerdo-el-mep-registro-su-mayor-retroceso-diario-mas-3-meses-cayo-572-n5121948',
      created: '2020-08-04'
    },
    {
      title: 'Coronavirus hoy en Perú: cuántos casos se registran al 4 de Agosto - LA NACION',
      url:
        'https://www.lanacion.com.ar/el-mundo/coronavirus-hoy-en-peru-cuantos-casos-se-registran-al-4-de-agosto-nid2411887',
      created: '2020-08-04'
    },
    {
      title:
        'Juan Carlos I: cómo es el lujoso resort de República Dominicana que eligió el rey emérito para su exilio - LA NACION',
      url:
        'https://www.lanacion.com.ar/el-mundo/tras-escandalo-como-es-lujoso-resort-estaria-nid2412437',
      created: '2020-08-04'
    },
    {
      title: 'Coronavirus:nuevo tratamiento de anticuerpos apunta a casos leves - Perfil.com',
      url:
        'https://www.perfil.com/noticias/bloomberg/coronavirus-nuevo-tratamiento-anticuerpos-apunta-casos-leves.phtml',
      created: '2020-08-04'
    },
    {
      title:
        'Mercado festejó el tan ansiado acuerdo de la deuda: bonos treparon hasta 9,6% (acciones, de mayor a menor) - ámbito.com',
      url:
        'https://www.ambito.com/finanzas/bonos/mercado-festejo-el-tan-ansiado-acuerdo-la-deuda-treparon-96-acciones-mayor-menor-n5122255',
      created: '2020-08-04'
    },
    {
      title:
        'Confirmado: los clubes del fútbol argentino volverán a los entrenamientos a partir del 10 de agosto - infobae',
      url:
        'https://www.infobae.com/deportes-2/2020/08/04/confirmado-los-clubes-del-futbol-argentino-volveran-a-los-entrenamientos-a-partir-del-10-de-agosto/',
      created: '2020-08-04'
    }
  ];

  const columns = [
    {
      title: 'Noticia',
      dataIndex: 'title',
      key: 'name',
      align: 'center',
      render: newEvent => (
        <Tooltip title={newEvent}>
          {newEvent.length > 40 ? newEvent.slice(0, 40).concat('...') : newEvent}
        </Tooltip>
      )
    },
    {
      title: 'Ver',
      dataIndex: 'url',
      key: 'age',
      align: 'center',
      width: '20%',
      render: link => (
        <>
          <a href={link}>
            <Icon type="eye" />
          </a>{' '}
        </>
      )
    },
    {
      title: 'Fecha',
      dataIndex: 'created',
      key: 'created',
      width: '20%',
      align: 'center'
    }
  ];

  return (
    <div className="NewEventsTable">
      <Table
        title={() => 'Noticias del período'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default NewEventsTable;

import React, { useMemo } from 'react'
import { Container, Table, Button } from 'react-bootstrap';





const Content = ({ data = {} }) => {
  const rows = useMemo(() => {
    return data.rows || []
  }, [JSON.stringify(data)])

  return (
    <div>
      {renderData(rows)}
    </div>
  )
}

function renderData(rows) {
  return rows.map((r, index) => {
    return <div key={index}>
      <Container className = "containerTable text-center">
     
        <Table className='tableBase text-center'>
            <thead>
                <tr>
                    <th rowSpan={2}>Дата и время</th>
                    <th rowSpan={2}>Статус</th>
                    <th rowSpan={2}>Кто звонил</th>
                    <th rowSpan={2}>Номер</th>
                    <th scope = {2}>Город</th>
                    <th rowSpan={2}>Оператор</th>
                    <th rowSpan={2}>Ожидание ответа</th>
                    <th rowSpan={2}>Обработка звонка</th>
                    <th rowSpan={2}>Запись</th>
                </tr>
            </thead>
            <tbody>
                    <td>{r.cdate  + ' ' + r.ctime}</td>
                    <td>{r.status}</td>
                    <td>{r.srcnum}</td>
                    <td>{r.dstnum}</td>
                    <td>{r.city}</td>
                    <td>{r.operator}</td>
                    <td>{r.cduration}</td>
                    <td>{r.qwaiting}</td>
                    <td className='record'><Button className='download'> </Button><Button></Button>{r.recordingfile}</td>
            </tbody>
        </Table>
      </Container>
    </div>
  })
}

export default Content
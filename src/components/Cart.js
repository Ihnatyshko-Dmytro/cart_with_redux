
export function Cart(props) {

    let sum = Object.keys(props.counts).reduce( (accum, item) => {
        accum += props.counts[item] * props.goodsO[item]['cost'];
        return accum;
  },0);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Фото</th>
                        <th>Цена за единицу</th>
                        <th>Количество</th>
                        <th>Общая стоимость</th>

                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {Object.keys(props.counts).map(item =>
                        <tr>
                            <th>{props.goodsO[item]['title']}</th>
                            <td>{<img src={props.goodsO[item]['image']} alt="" className="miniImg" />}</td>
                            <td>{props.goodsO[item]['cost']}</td>
                            <td>{props.counts[item]}</td>
                            <td>{props.counts[item] * props.goodsO[item]['cost']}</td>
                            <td>
                             
                                <button className="minus" data-key={props.goodsO[item]['articul']}>-</button>
                                <button className="deleteGo" data-key={props.goodsO[item]['articul']}>-</button>
                                
                                </td>
                         
                        </tr>)}

                    <tr>
                        <td ></td>
                        <td ></td>
                        <td ></td>
                        <td >Сумма:</td>
                        <td >{sum}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
import styles from "./CarDetails.module.css";

const CarDetails = ({brand, km, color}) => {
  return (
    <div className={styles.car_details_div}>
        <h1 className={styles.car_details_title}>Detalhes do carro</h1>
        <ul className={styles.car_details_ul}>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}
;
export default CarDetails
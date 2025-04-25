import { Link } from "react-router-dom"
export default function Home() {
    return (
        <div className="button-container">
            <button className="btn">
                <Link to='/easyupload' >Easyupload</Link>
            </button>
            <button className="btn">
                <Link to='/peakadvisory'>Peakadvisory</Link>
            </button>
        </div>
    )
}
import '../styles/components/Header.scss';
import NewWinLink from './Utils/NewWinLink';

// Export Header component as default
export default function Header() {
    // call-kitchen button changes for hover
    const callKitchen = (e) => {
        e.target.firstChild.classList.toggle('fa-utensils');
        e.target.firstChild.classList.toggle('fa-phone-alt');
    };

    // Return the component to be rendered
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark px-4 px-lg-5 py-3 py-lg-0 shadow">
            <a href="/" className="navbar-brand p-0">
                <img src="img/logo-sml.png" alt="Logo" className="m-1" />
                <h1 className="text-primary m-0">Masala Nama</h1>
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0 pe-4">
                    <a
                        href="tel:+91-9829101401"
                        className="nav-item nav-link call-us"
                    >
                        Call us at +91-9829101401
                    </a>
                </div>
                <div className="btn-group animated slideInRight order-buttons">
                    <NewWinLink
                        href="https://www.zomato.com/ajmer/masala-nama-ana-sagar-lake"
                        className="btn p-sm-1 zomato-button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2500 535.29"
                            height="18px"
                            className="m-1 zomato-logo"
                        >
                            <path
                                d="m381.02 135.1-2.25 72.32-188.62 205.03c78.79 0 128.75-.77 157.56-2.37-8.35 38.91-15.14 70.72-21.98 118.41-37.89-3.2-96.96-4-156.06-4-65.88 0-123.46.79-169.67 4l1.54-73.14 188.61-204.21c-82.57 0-112.88.78-146.95 1.58 7.55-36.56 12.86-77.07 18.16-117.62 59.84 2.38 83.32 3.16 161.35 3.16 71.97.01 112.85-.78 158.31-3.16zm214.39-21.48c-122.75 0-216.64 109.67-216.64 240.84 0 98.53 56.8 174.03 167.39 174.03 123.48 0 216.65-109.69 216.65-241.63.01-97.7-55.31-173.24-167.4-173.24zm-37.13 309.46c-27.28 0-43.17-24.67-43.17-73.14 0-72.32 29.54-130.32 65.92-130.32 26.49 0 42.4 23.86 42.4 73.1-.01 71.52-28.77 130.36-65.15 130.36zm1772.1-314.9c-124.32 0-219.47 111.12-219.47 243.94 0 99.87 57.55 176.37 169.59 176.37 125.09 0 219.49-111.13 219.49-244.78.01-99.02-55.99-175.53-169.61-175.53zm-39.95 314.48c-27.29 0-43.17-24.67-43.17-73.14 0-72.32 29.55-130.31 65.92-130.31 26.48 0 42.42 23.84 42.42 73.09-.02 71.55-28.81 130.36-65.17 130.36zm-890.58-165.97c9.86-67.53 4.56-128.74-70.42-128.74-54.55 0-113.63 46.1-155.29 123.19 9.1-63.6 3.78-123.19-70.45-123.19-56.05 0-116.65 48.47-158.33 128.74 10.61-52.45 8.35-112.07 5.31-124.78-43.17 7.16-81.03 11.12-134.07 12.71 1.52 36.57-.76 84.22-7.58 129.56L791.6 393.37c-6.82 46.91-14.4 100.95-21.98 135.13h140.9c.77-20.69 6.08-53.26 9.86-81.87l12.12-81.84c9.84-53.28 52.25-116.03 84.82-116.03 18.94 0 18.2 18.27 12.89 52.44l-13.64 92.16c-6.84 46.91-14.39 100.95-21.98 135.13H1137c.77-20.69 5.31-53.26 9.09-81.87l12.11-81.84c9.86-53.28 52.3-116.03 84.85-116.03 18.96 0 18.21 17.46 15.15 41.32l-34.02 238.41h129.97zm680.51 147.03-15.15 93.79c-23.49 12.71-67.43 31-118.18 31-86.36 0-103.76-46.1-90.15-143.85l21.98-157.36h-42.5l12-101.86 46.4-2.24 17.43-73.91L2043.22 0l-16.65 123.19h90.15c-3.02 12.71-13.66 82.67-16.64 104.1h-87.92l-19.7 145.44c-5.3 37.35-2.25 50.87 23.47 50.87 18.98-.02 46.98-11.15 64.43-19.88zm-497.04 50.66c47.69-5.91 80.51-51.88 88.4-97.75l1.33-12.29c-20.49-4.58-50.11-8.07-78.83-4.56-27.35 3.33-50.11 14.7-62.35 31.16-9.23 11.82-13.87 25.96-11.81 42.82 3.11 25.25 31.04 44.55 63.26 40.62zm-40.59 72.64c-67.31 8.27-111.64-18.45-124.95-79.22-8.35-38.24 3.24-81.8 23.51-107.79 27.15-33.99 71.39-55.81 125.38-62.4 43.45-5.39 80.06-2.73 114.3 3.75l1.42-5.87c.98-9.39 1.97-18.76.6-29.98-3.55-28.81-26.27-45.97-82.37-39.07-37.85 4.65-73.86 18.32-101.82 33.88l-27.2-82.19c37.9-21.76 85.67-38.32 140.34-45.03 104.43-12.81 177.81 20.49 187.21 97.05 2.49 20.36 2.79 41.94.22 61.52-13.41 94.66-22 165.89-25.77 213.63-.61 7.39-.56 20.09.1 38.09l-129.59-.12c2.76-7.46 5.23-17.58 7.43-30.27 1.46-8.35 2.5-18.88 3.15-31.64-27.39 37.58-65.04 59.9-111.96 65.66z"
                                className="zomato animated"
                            />
                        </svg>
                    </NewWinLink>
                    <a
                        href="tel:+91-9829101401"
                        className="btn call-kitchen shadow"
                        onMouseEnter={callKitchen}
                        onMouseLeave={callKitchen}
                    >
                        <i className="fa fa-utensils"></i>
                    </a>
                    <NewWinLink
                        href="https://www.swiggy.com/restaurants/masala-nama-sagar-link-road-north-ajmer-ajmer-659627"
                        className="btn p-sm-1 swiggy-button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="637.7 217.3 1863.8 300.8"
                            className="m-1 swiggy-logo"
                        >
                            <path
                                d="M246.7 728.9c-.5-.3-1-.8-1.5-1.3-8.8-10.9-63-79-118.2-166.4-16.6-27.8-27.3-49.6-25.3-55.2 5.4-14.6 101.7-22.6 131.4-9.4 9 4 8.8 9.3 8.8 12.4 0 13.4-.7 49.2-.7 49.2 0 7.4 6 13.4 13.4 13.4s13.4-6 13.4-13.5l-.1-89.4c0-7.8-8.4-9.7-10-10-15.5-.1-46.9-.2-80.7-.2-74.5 0-91.1 3.1-103.8-5.2C45.9 435.5 1.1 314.3 0 246.1-1.5 149.9 55.4 66.6 135.4 25.3 168.8 8.4 206.6-1.1 246.5-1.1c126.7 0 231 95.9 244.9 219.3v.3c2.5 29.8-161.4 36.2-193.8 27.5-5-1.3-6.2-6.4-6.2-8.6 0-22.7-.2-86.5-.2-86.5 0-7.4-6-13.4-13.4-13.4s-13.4 6-13.4 13.5l.3 117.6c.2 7.4 6.4 9.4 8.1 9.7h101.7c54.3 0 77.1 6.3 92.2 17.9 10.1 7.7 14 22.5 10.6 41.7C446.9 508.5 254 720 246.7 728.9zm523-398.5c48.7 20.9 78.8 44.1 78.8 95.1 0 52-39.3 85.6-100.1 85.6-49.3 0-88.8-22.4-108.5-61.4l-3.2-6.3 57.9-33.7 3.8 6.2c13 21.4 27.6 30.5 48.8 30.5 18.2 0 30.5-8.1 30.5-20.2 0-13.4-8.9-18.4-36.3-30.4l-13.9-6c-37.2-15.9-71.6-38-71.6-91.5 0-48.1 36.7-81.6 89.3-81.6 39.8 0 67.2 15.5 86 48.7l3.5 6.2-56.1 36.2-3.9-6.9c-9.4-16.8-18.2-20.2-29.4-20.2-11.7 0-19.3 6.5-19.3 16.6 0 11.6 5.6 16.7 29.9 27.2zm410.1 9.8 40.9-114.4h70.2l-104 290h-15.6L1108.2 380c-2.9-6.2-6-13.9-8.6-21-2.7 7.1-5.8 14.8-8.7 21.1l-65.6 135.8h-15.5l-105.7-290h75l41.3 114.4c2.6 7.3 5.3 16.2 7.7 24.4 2.8-8.5 6.2-17.7 9.7-25.1l54.3-116.1h15l55.1 116.1c3.5 7.4 6.9 16.6 9.7 25.1 2.5-8.3 5.3-17.2 7.9-24.5zm192.9 167.3V219.9h70.8v287.6zm303.1-96.7v-64.3h131.5v128.9l-2.7 2.2c-15 12.4-54.9 33.4-109 33.4-91.2 0-154.8-60.6-154.8-147.4 0-85.2 61.4-147 146.1-147 46.5 0 80.7 13.2 104.3 40.2l4.6 5.3-48.3 48-5.2-5.4c-13.5-13.9-27.5-22.6-55.3-22.6-43.3 0-73.6 33.5-73.6 81.5 0 50 32.3 82.3 82.4 82.3 16.6 0 33.9-2.9 45.7-7.5v-27.7zm359 0v-64.3h131.5v128.9l-2.7 2.2c-15.1 12.4-54.9 33.4-109 33.4-91.2 0-154.8-60.6-154.8-147.4 0-85.2 61.4-147 146-147 46.6 0 80.7 13.2 104.3 40.2l4.6 5.3-48.3 48-5.3-5.4c-13.5-13.9-27.5-22.6-55.4-22.6-43.3 0-73.6 33.5-73.6 81.5 0 50 32.3 82.3 82.4 82.3 16.6 0 33.9-2.9 45.7-7.5v-27.7zM2426 219.9h74l-101.6 191.4v96.2h-71.2v-92.1L2218.9 220h79l50 91.7c5.4 10 11 23.2 15.3 33.9 4.1-10.6 9.4-23.7 14.8-33.8z"
                                className="swiggy"
                            />
                        </svg>
                    </NewWinLink>
                </div>
            </div>
        </nav>
    );
}
import './Loader.css'


export default function Loader() {
    return (
      <div className=" bg-[var(--body-glass-color)] backdrop-blur-md absolute h-screen w-screen flex items-center justify-center top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
        <div className="dash uno"></div>
      </div>
    );
}
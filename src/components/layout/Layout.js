import Navigation from "../header/Navigation";

function Layout(props) {
    return ( 
        <>
            <Navigation/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;
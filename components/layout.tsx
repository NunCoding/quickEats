import NavBar from "@/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <div>
            <NavBar />
            <main className="mt-10">{children}</main>
        </div>
     );
}
 
export default Layout;
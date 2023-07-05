import CounterPage from "../components/counter/counterPage";

export const metadata = {
  title: "AuthLayout Meta Data",
  description: "Generated by AuthLayout app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="border m-3.5"> 
        AUTH Layout 
       
        <div className="border p-11 m-3.5">
           <h1> Auth Children </h1>
           <CounterPage></CounterPage>
            {children}
        </div>
       </div>
      
    </div>
  );
}



const { 
    REACT_APP_LOCAL_ADDRESS,
    REACT_APP_LOCAL_PORT,
    REACT_APP_PRODUCTION_ADDRESS,
    REACT_APP_PRODUCTION_PORT,
    REACT_APP_TEST_ADDRESS,
    REACT_APP_TEST_PORT,
    } = process.env as Record<string, string>;

 let address: string;
 let port: string;
 if(process.env.NODE_ENV === "production") {
    address = REACT_APP_PRODUCTION_ADDRESS;
    port = REACT_APP_PRODUCTION_PORT;
 } else if(process.env.NODE_ENV === "test") {
    address = REACT_APP_TEST_ADDRESS;
    port = REACT_APP_TEST_PORT;
 } else {
    address = REACT_APP_LOCAL_ADDRESS;
    port = REACT_APP_LOCAL_PORT;
 }

export const getServerAddress = (protocol: "http" | "ws") => {

  return `${protocol}://${address}:${port}`
}
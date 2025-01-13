import { Box, Typography } from "@mui/material";

export default function Layout({ children }) {
  return (
    <div
      className={"flex flex-col w-full bg-white items-center justify-center h-1/5"}
    >
      <header style={{height:"15vh"}} className="bg-gray-800 w-full p-10 h-20vh">
        <Typography variant="h2" align="center" className="text-white mb-8">
          React Styling Technologies
        </Typography>
      </header>
      <main style={{height:"70vh"}}>{children}</main>
      <footer style={{height:"15vh"}} className="bg-gray-800 w-full p-10 h-1/5">
        <Typography variant="h2" align="center" className="text-white mb-8">
          João Vitor Minosso @2025
        </Typography>
      </footer>
    </div>
  );
}

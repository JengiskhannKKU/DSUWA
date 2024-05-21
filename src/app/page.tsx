import Image from "next/image";
import styles from "./page.module.css";
import { Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Stack direction="row" justifyContent="center">
          <Typography
            sx={{
              fontFamily: "Athiti",
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 'medium'
            }}
          >
            หน้าหลัก
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}

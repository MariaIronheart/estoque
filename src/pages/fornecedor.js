import {Box, Button, Divider, Flex, Input, SimpleGrid, Table, Tbody, Td, Text, Th, Thead, Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Fornecedor = () => {

  const [fornecedor, setNameFornecedor] = useState("");
  const [listFornecedor, setListFornecedor] = useState([]);
  const [contato, setContatoFornecedor] = useState("");

  useEffect(() => {
    const db_fornecedores = localStorage.getItem("db_fornecedores")
      ? JSON.parse(localStorage.getItem("db_fornecedores"))
      : [];
      setListFornecedor(db_fornecedores);
    }, []);

    const handleNewFornecedor = () => {
      if (!fornecedor) return;
      if (verifyFornecedorName()) {
        alert("Fornecedor já cadastrado!");
        return;
      };

      const id = Math.random().toString(36).substring(2);

      if (listFornecedor && listFornecedor.length) {
        localStorage.setItem(
          "db_fornecedores",
          JSON.stringify([...listFornecedor, { id, fornecedor , contato }])
        );
        
        setListFornecedor([...listFornecedor, { id, fornecedor , contato}]);
        } else {
          localStorage.setItem("db_fornecedores", JSON.stringify([{ id, fornecedor , contato}]));

          setListFornecedor([{ id, fornecedor , contato}]);
        }

        setListFornecedor("");
        setContatoFornecedor("");


    };

  return (
    <></>
  )
};
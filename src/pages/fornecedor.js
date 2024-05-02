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
    const db_fornecedor = localStorage.getItem("db_fornecedor")
      ? JSON.parse(localStorage.getItem("db_fornecedor"))
      : [];
      setListFornecedor(db_fornecedor);
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
          "db_fornecedor",
          JSON.stringify([...listFornecedor, { id, fornecedor , contato }])
        );
        
        setListFornecedor([...listFornecedor, { id, fornecedor , contato}]);
        } else {
          localStorage.setItem("db_fornecedor", JSON.stringify([{ id, fornecedor , contato}]));

          setListFornecedor([{ id, fornecedor , contato}]);
        }

        setContatoFornecedor("");
        setNameFornecedor("");
    };

    const verifyFornecedorName = () => {
      return !!listFornecedor.find((prod) => prod.fornecedor === fornecedor);
    };

    const removeFornecedor = (id) => {
      const db_fornecedor_outputs = localStorage.getItem("db_fornecedor_outputs")
        ? JSON.parse(localStorage.getItem("db_fornecedor_outputs"))
        : [];
  
      const db_fornecedor_entries = localStorage.getItem("db_fornecedor_entries")
        ? JSON.parse(localStorage.getItem("db_fornecedor_entries"))
        : [];
  
  
      const newArray = listFornecedor.filter((prod) => prod.id !== id);
      
      //storage local
      localStorage.setItem("db_fornecedor", JSON.stringify(newArray));
  
      setListFornecedor(newArray);
    };

  return (
    <Flex h="100vh" flexDirection="column">
      <Header />

      <Flex w="100%" my="6" maxW={1500} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Box w="100%">
          <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Input
              value={fornecedor}
              onChange={(e) => setNameFornecedor(e.target.value)}
              placeholder="Nome do fornecedor"
            />
            <Input
                placeholder="Contato"
                type="string"
                value={contato}
                onChange={(e) => setContatoFornecedor(e.target.value)}
              />
            <Button w="40" onClick={handleNewFornecedor}>
              CADASTRAR
            </Button>
          </SimpleGrid>

          <Box overflowY="auto" height="80vh">
            <Table mt="6">
              <Thead>
                <Tr>
                  <Th fontWeight="bold" fontSize="14px">
                    Nome do fornecedor
                  </Th>
                  <Th fontWeight="bold" fontSize="14px">
                      Contato
                  </Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {listFornecedor.map((item, i) => (
                  <Tr key={i}>
                    <Td>{item.fornecedor}</Td>
                    <Td>{item.contato}</Td>
                    <Td textAlign="end">
                      <Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeFornecedor(item.id)}
                      >
                        DELETAR
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Fornecedor;
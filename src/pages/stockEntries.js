import { Box , Button, Flex, Input, Select, SimpleGrid, Table, Tbody, Td, Th, Tr, Thead } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const StockEntries = () => {

    const [amount, setAmount] = useState("");
    const [product_id, setProduct_id] = useState("0");
    const [listStockEntries, setStockEntries] = useState([]);
    const [listStockOutputs, setStockOutputs] = useState([]);

    useEffect (() => {
        const db_stock_entries = localStorage.getItem("db_stock_entries")
        ? JSON.parse(localStorage.getItem("db_stock_entries"))
        : [];

        setStockEntries(db_stock_entries);

        const db_products = localStorage.getItem("db_products")
        ? JSON.parse(localStorage.getItem("db_products"))
        : [];

        setStockEntries(db_products);


    }, []);


    const handleNewEntry = () => {
        if(!amount | (product_id === "0")) {
            return alert("Selecione o produto e a qauntidade.")
        }

        const id = Math.random().toString(36).substring(2);

        if(listStockEntries && listStockEntries.length) {
            localStorage.setItem("db_stock_entries", 
        JSON.stringify([...listStockEntries, {id, amount, product_id}]));
        setStockEntries([...listStockEntries, {id, amount, product_id}]);
        }

        setAmount("");
        setProduct_id("");

    };

    const removeEntries = (id) => {
        const newArray = listStockEntries.filter((item) => item.id !== id);

        localStorage.setItem("db_stock_entries", JSON.stringify(newArray));

        setStockEntries(newArray);
    };

    const getProductById = (id) => {
        return listProducts.filter((item) => item.id == id)[0]?.name;
    }

        return (
            <Flex h="100vh" flexDirection="column">
                <Header/>

                <Flex w="100%" my="6" maxW={1200} mx="auto" px="6" h="100vh">
                    <Sidebar/>
                    <Box w="100%">
                        <SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
                            
                        </SimpleGrid>
                    </Box>
                </Flex>
            </Flex>
        );
};

export default StockEntries;
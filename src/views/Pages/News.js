import React, {useState} from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomEditor from "../../components/Editor/Editor";

function News() {
  const [title, setTitle] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const [addToCarousel, setAddToCarousel] = useState("");

  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("white", "navy.800");
  const titleColor = useColorModeValue("gray.700", "blue.500");

  return (
    <Flex position='relative' mb='40px'>
      <Flex
        minH={{ md: "1000px" }}
        h="100vh"
        w='100%'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ md: "0px" }}>
        <Flex
          w='100%'
          h='100%'
          alignItems='center'
          justifyContent='center'
          mb='60px'
          mt={{ base: "50px", md: "20px" }}>
          <Flex
            zIndex='2'
            direction='column'
            w='100%'
            h="90%"
            background='transparent'
            borderRadius='15px'
            p='40px'
            mx={{ base: "100px" }}
            m={{ base: "20px", md: "auto" }}
            bg={bgForm}
            boxShadow={useColorModeValue(
              "0px 5px 14px rgba(0, 0, 0, 0.05)",
              "unset"
            )}>
            <Text
              fontSize='xl'
              color={textColor}
              fontWeight='bold'
              textAlign='center'
              mb='22px'>
              Добавление новости
            </Text>
            <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Титуль
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Титуль'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Дата публикации
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='date'
                placeholder='Дата публикации'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Добавить ссылку для видео
              </FormLabel>
              <Input
                  variant='auth'
                  fontSize='sm'
                  ms='4px'
                  type='url'
                  placeholder='Добавить ссылку'
                  mb='24px'
                  size='lg'
              />
              <FormControl display='flex' alignItems='center' mb='24px'>
                <Switch id='remember-login' colorScheme='blue' me='10px' />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal'>
                  Добавить в карусель
                </FormLabel>
              </FormControl>
              <CustomEditor />
              <Button
                fontSize='10px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'>
                Добавить новость
              </Button>
            </FormControl>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default News;

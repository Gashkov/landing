<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['messages'])&&$_POST['messages']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'gashkov321@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Message from Vitam website'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Email: '.$_POST['email'].'</p>   
                        <p>Message: '.$_POST['messages'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Sended <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>
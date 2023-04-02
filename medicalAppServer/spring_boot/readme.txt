Hi mohim hadi documentation sghira

1- creation dyal project b spring initializer , kayn daba ri depencency wahda li hia spring web , mzal khas nzido mn ba3d dyal spring data jpa o security ..

2- bach t lonciw app b docker follow had steps :

* step 1: 
 run this commande f directory d app : docker built -t pfaApi(hadi ri smiya d image t9ed tkon ay haja okhra ) . <-- matnsawch had point f tali 



* step 2: docker images => chekiw images li wlaw 3endkom db atzad pfaApi

* step 3: docker run -p 8080:8080 pfaApi 

8080 lawla : port local

8080 tanya port d container

* step 4 : go to http://localhost:8080/sayHello 


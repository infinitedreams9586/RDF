#### How to setup Django Application ###

1. Application can be run as a docker image.
2. Pull the source code and find the Dockerfile. Please make sure to have docker installed and running.
3. Build the docker image using the command as follows.
```shell
docker build -t tib-assignment .
```
4. Start a docker container, using following command.
```shell
docker run -p 8000:8000 --name my-app -it tib-assignment 
```
5. Application is ready to run at,
```shell
August 15, 2021 - 06:20:01
Django version 3.2.6, using settings 'tib.settings'
Starting development server at http://0.0.0.0:8000/
Quit the server with CONTROL-C.
```
6. Access following URL on the browser.
```html
http://127.0.0.1:8000/covid/download
```
7. Download page will be shown. Don't perform any operation as of now, as  
we need to setup database first.

![download page screenshot](/docs/DownloadPage.png)


#### How to setup GraphDB repository ####
1. Pull GraphDB Standard Edition docker image.
```shell
docker pull ontotext/graphdb:9.9.0-se
```
2. Start GraphDB container, with local storage.
```shell
docker run -p 127.0.0.1:7200:7200 -v [Your Local Data Directory Path]:/opt/graphdb/home --name graphdbinstance -t ontotext/graphdb:9.9.0-se
```
3. Access GraphDB through your local browser.
4. Apply Standard Edition Trial license in GraphDB.
5. Create a repository name "ECDC".

#### How to Run Application ####
1. Make sure that Django application and GraphDB container is running.
2. Access following URL on the browser.
```html
http://127.0.0.1:8000/covid/download
```
3. Enter this path in the textbox and click Download button.
```html
https://opendata.ecdc.europa.eu/covid19/nationalcasedeath_eueea_daily_ei/csv/data.csv
```
4. Please note that, it may take some time for the application to download CSV file, process the file and   
generate turtle file and upload the file on GraphDB "ECDC" repository.

![Download and process complete screenshot](/docs/Complete.png)

5. Once GraphDB finishes the processing of file. It is possible to execute queries and see the visualization.
6. Here is the sample query executed to find cases and deaths for Germany for August, 2021.
```sparksql
PREFIX eg:<http://example.org/ns#>
PREFIX ns1: <http://purl.org/linked-data/cube#>
SELECT ?geoId (SUM(?y) as ?casesSum) (SUM(?z) as ?deathSum) WHERE {
    ?x eg:geoId ?geoId .
    ?x eg:countriesAndTerritories "Germany" .
    ?x eg:cases ?y .
    ?x eg:deaths ?z .
    ?x eg:dateRep ?fil .
    FILTER contains(?fil, "08/2021") .
}  GROUP BY ?geoId
```
7. Query result and verification.

![Query & Result](/docs/QueryResult.png)

7. GraphDB visualization

![Visualization](/docs/Visualization.png)

#### Files #####

1. Downloaded CSV file  
[CSV Data File](/docs/datafile.csv)
  
2. Generated Turtle file  
[Turtle file](/docs/converted.ttl)

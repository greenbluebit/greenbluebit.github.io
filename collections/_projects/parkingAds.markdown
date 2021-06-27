---
layout: default
order_id: 6
name: parkingAds
title: Parking Ads
preview-img: parkingAds.png
header-img: parkingAds.png
icon: keyboard
icon_type: dark
alt: Parking Ads
category: Software
description: During the sixth semester of my bachelor, we received a project to create a system for booking parking lots. At first glance, that's not a complicated idea. However, we were supposed to design the whole thing from the ground up with service-oriented architecture in mind. Our guidelines also demanded the application to work on any device, to be able to get ads and when the booking email is generated, to be able to enrich it with content from different partners that would have their own APIs.<br><br>The group consisted of two of us, my groupmate helped with the frontend. I took the role of architect in this project and I designed services which could be easily discoverable, each of them having a corresponding document in CouchDB which would keep tabs on wether they are currently running, where their jar would be for execution purposes, any other configuration required by the service as well as a lengthy description regarding the intricacies of the service.<br><br>Development did not take very long once I had the basic design setup, the most complex service was the one whose task was to run and track every other service. It would check their status in couchDB, and if needed, it would restart the process by running the -jar as a sub-process.<br>This service, called the Multi-processor could also stop specific services, restart them all, take a look at the latest in the rotational logs of all of the services as well as, due to me having fun programming, able to play music and tell jokes.<br><br>The other services handled all of the business logic we required. In order of development, they are:<br>- Ad Query | This one queries APIs for ads every few minutes, as this was a limitation imposed on us by the project requirements. The ads returned would then be saved in a CouchDB document to be used when loading the web page and when sending the email.<br>- Hotel Query | This one was quite a pain to develop. We used google places to get the city in which the latitude and longitude of the chosen parking lot would be. Once we had that, we would check this send a request to Kayak to give us the ctid they have for that city. Once we had that, we would get the top 5 hotels in the area. All of this information would be saved in CouchDB. A different user could then try to book the same parking lot or one nearby. The service would first look up in our couchdb to see if there was any City saved in a distance of 20 kms from the parking lot in question. This was accomplished using the haversine formula, which gives us the distance between two spots from a birds eye view, which was enough to work with. If the distance is larger than the limit, we ask google places for the city there. If it's the same as an already existing one in our database, we use the hotels from the already existing document.<br>This service was used to enrich the booking confirmation with content from our partners. This worked by using RabbitMQ and passing data from a source queue to a target queue that each service in charge of enriching used. The last one in this chain would handle emailing.<br>- Router | This one is basically our API, it offers all of our functionality to any of the frontend we'd develop. I made this using Restlet, it would also allow our status page to display the current status of the services by looping through their documents and based on the last time it was updated, return a true or false for each service if it is up or not.<br>- Ad Enricher | This service takes the ads saved by the Ad Query service whenever a message arrives on the query it listens to in RabbitMQ and sends it down the chain.<br>- Email | The last service in the booking confirmation saga, the moment it receives a message it attempts to build an html template for it from the content it has. It also creates lists which can be with simple text, images or links, depending on the content type that each enriching service previously added.<br><br>As for the frontend, we worked with Angular 7, all of the modules that can be quickly used allowed the development to be very fast, especially since the backend had all of the business logic and the frontend was only tasked with requesting data, displaying it, and sending booking requests.
screenshots:
    - img: services.png
      title: Service Orientated Architecture
      description: This image shows all of our services, each in charge of it's own operation, increasing their reusability.
    - img: multiprocessor.png
      title: TUI of the multiprocessor
      description: This is the user interface of the multiprocessor. With it's less than stellar jokes.
    - img: adQueryDocument.png
      title: CouchDB document for Ad Query
      description: This is the document that has all of the info about a service. In it we can see if the service is running and other details specific to the service.
taggers:
    - title: Game-Jam
    - title: C#
    - title: Unity
---


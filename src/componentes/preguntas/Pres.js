  let Res = new Map();
   

  Res.set ("uno", {
                      n:"Confidencialidad",v1:1,
                      e:"Integridad.",v2:2,
                      t: "Disponibilidad",v3:3,
                      y:"Autorización",v4:4
                        })
                
        Res.set  ( "dos",{
                       n: "Confidencialidad.",v1:1,
                       e: "Integridad",v2:2,
                       t: "Disponibilid",v3:3,
                       y: "Autenticación",v4:4
                   })
                   Res.set( "tres",{
                    n: "Separación de funciones",v1:1,
                    e: "Defensa en profundidad",v2:2,
                    t: "Mediación completa.",v3:3,
                    y: "Diseño abierto.",v4:4
                })           
                Res.set("4",{
                    n:"Proporcionar información probatoria.", v1:1,
                    e: "Asegurar que el usuario no pueda negar sus acciones",v2:2,
                    t: "Detectar las acciones que se llevaron a cabo",v3:3,
                    y: "Evitar que un usuario realice algunas operaciones no autorizadas",v4:4
                    })            
                    Res.set("5",{
                        n:"Evitación.", v1:1,
                        e: "Mitigación.",v2:2,
                        t: "Transferencia",v3:3,
                        y: "Aceptación.",v4:4
                        })          
                        Res.set("6",{
                            n:"Un estándar.", v1:1,
                            e: "Política",v2:2,
                            t: "Línea de base",v3:3,
                            y: "Pauta.",v4:4
                            })                           
                            Res.set("7",{
                                n:"Integración del modelo de madurez de la capacidad (CMMI)", v1:1,
                                e: "Arquitectura de seguridad empresarial aplicada de Sherwood (SABSA) Objetivos de control para la tecnología de la información y",v2:2,
                                t: "afines (COBIT®)",v3:3,
                                y: "Marco de Zachman",v4:4
                                })     
           Res.set("8",{
                n:"Acuerdos de nivel de servicio (SLA).", v1:1,
                e: "Protección de la propiedad intelectual.",v2:2,
                t: "Costo de personalización",v3:3,
                y: "Revisión del código para puertas traseras y caballos de Troya.",v4:4
                })                                  
              
                Res.set("14",{
                    n:"Higienización.", v1:1,
                    e: "Desmagnetización.",v2:2,
                    t: "Anonimización (Anonimato de datos)",v3:3,
                    y: "Formateo",v4:4
                    })                           
               Res.set("15",{
                    n:"Análisis de requisitos", v1:1,
                    e: "Diseño",v2:2,
                    t: "Implementación",v3:3,
                    y: "Despliegue",v4:4
                    })                           
               Res.set("18",{
                    n:"Estándar de cifrado avanzado (AES)", v1:1,
                    e: "Estenografía",v2:2,
                    t: "Infraestructura de clave pública (PKI)",v3:3,
                    y: "Protocolo ligero de acceso a directorios (LDAP)",v4:4
                    })                           
               Res.set("19",{
                    n:"Velocidad de las operaciones criptográficas", v1:1,
                    e: "Garantía de confidencialidad",v2:2,
                    t: "Intercambio de claves",v3:3,
                    y: "No repudio",v4:4
                    })                           
               Res.set("20",{
                    n:"cifrado.", v1:1,
                    e: "enmascaramiento.",v2:2,
                    t: "hash.",v3:3,
                    y: "ofuscación.",v4:4
                    })           
                    Res.set("22",{
                        n:"privilegio mínimo.", v1:1,
                        e: "mecanismos menos comunes.",v2:2,
                        t: "economía de mecanismos.",v3:3,
                        y: "separación de funciones",v4:4
                        })                           
                        Res.set("24",{
                            n:"atacantes.", v1:1,
                            e: "impacto empresarial.",v2:2,
                            t: "activos críticos.",v3:3,
                            y: "puntos de entrada.",v4:4
                            })                           
                       Res.set("25",{
                            n:"Spoofing", v1:1,
                            e: "Manipulación",v2:2,
                            t: "Repudio",v3:3,
                            y: "Divulgación de información",v4:4
                            })                           
                       Res.set("26",{
                            n:"Autorización.", v1:1,
                            e: "Identificación.",v2:2,
                            t: "Archivado..",v3:3,
                            y: "Auditoría..",v4:4
                            })                           
                       Res.set("27",{
                            n:"A. desencadenantes.", v1:1,
                            e: "B. normalización.",v2:2,
                            t: "C. vistas.",v3:3,
                            y: "D. cifrado",v4:4
                            })                           
                       Res.set("29",{
                            n:"Kerberos", v1:1,
                            e: "Lenguaje de marcado de confirmación de seguridad (SAML)",v2:2,
                            t: "Liberty Alliance ID-FF",v3:3,
                            y: "Contraseña de un solo uso (OTP)",v4:4
                            })                           
                       Res.set("31",{
                            n:"Falsificación de solicitud entre sitios (CSRF)", v1:1,
                            e: "Coolboot",v2:2,
                            t: "Inyección SQL",v3:3,
                            y: "Rootkit",v4:4
                            })                           
                       Res.set("32",{
                            n:"no se implementaron inicialmente teniendo en cuenta la seguridad", v1:1,
                            e: "las habilidades de un hacker han aumentado significativamente",v2:2,
                            t: "los datos que recopilan son de clasificación de alto secreto",v3:3,
                            y: "se han violado los firewalls que están instalados frente a estos dispositivos.",v4:4
                            })                           
                       Res.set("34",{
                            n:"Mitigación", v1:1,
                            e: "Transferencia.",v2:2,
                            t: "Aceptación.",v3:3,
                            y: "Evitación.",v4:4
                            })                           
                       Res.set("35",{
                            n:"Mitigación", v1:1,
                            e: "Transferencia.",v2:2,
                            t: "Aceptación.",v3:3,
                            y: "Evitación.",v4:4
                            })                           
                       Res.set("36",{
                            n:"Análisis cuantitativo de riesgos.", v1:1,
                            e: "Identificación de riesgos.",v2:2,
                            t: "Implementación de respuesta al riesgo.",v3:3,
                            y: "Análisis de riesgo cualitativo",v4:4
                            })                           
                       Res.set("37",{
                            n:"Explotar.", v1:1,
                            e: "Mitigación.",v2:2,
                            t: "Transferencia.",v3:3,
                            y: "Evitación.",v4:4
                            })                           
                       Res.set("38",{
                            n:"La gestión de riesgos solo se vuelve más fácil cuando el proyecto pasa a la ejecución del proyecto.", v1:1,
                            e: "La gestión de riesgos solo se vuelve más fácil cuando el proyecto está cerrado.",v2:2,
                            t: "La gestión de riesgos es un proceso iterativo y nunca se vuelve más fácil.",v3:3,
                            y: "La gestión de riesgos solo se vuelve más fácil cuando más a menudo se practica",v4:4
                            })                           
                       Res.set("39",{
                            n:"Una patente", v1:1,
                            e: "Marca registrada.",v2:2,
                            t: "Secreto comercial.",v3:3,
                            y: "Licencias.",v4:4
                            })                           
                       Res.set("40",{
                            n:"Nombre completo", v1:1,
                            e: "Número de pedido.",v2:2,
                            t: "dirección IP.",v3:3,
                            y: "Fecha de nacimiento.",v4:4
                            })                           
                                             
                            Res.set("42",{
                              n:"Inyección.", v1:1,
                              e: "Inferencia.",v2:2,
                              t: "Phishing.",v3:3,
                              y: "Poliinstanciación",v4:4
                              })                           
                         Res.set("43",{
                              n:"vistas de la base de datos.", v1:1,
                              e: "interfaces de gestión de seguridad.",v2:2,
                              t: "archivos globales.",v3:3,
                              y: "manejo de excepciones.",v4:4
                              })                           
                              Res.set("44",{
                                   n:"Divulgación, alteración y destrucción", v1:1,
                                   e: "Divulgación, alteración y detección",v2:2,
                                   t: "Desmagnetización, alteración y destrucción",v3:3,
                                   y: "Divulgación, detección y destrucción",v4:4
                                   })                           
                              Res.set("45",{
                                   n:"Integridad", v1:1,
                                   e: "Autenticidad",v2:2,
                                   t: "Confidencialidad",v3:3,
                                   y: "Disponibilidad",v4:4
                                   })                           
                              Res.set("46",{
                                   n:"Disponibilidad", v1:1,
                                   e: "Autenticidad",v2:2,
                                   t: "Confidencialidad",v3:3,
                                   y: "Integridad",v4:4
                                   })                           
                              Res.set("47",{
                                   n:"El software", v1:1,
                                   e: "El subsistema de seguridad",v2:2,
                                   t: "El software del sistema operativo",v3:3,
                                   y: "El monitor de referencia",v4:4
                                   })                           
                              Res.set("48",{
                                   n:"Disponibilidad de información", v1:1,
                                   e: "Integridad de la información",v2:2,
                                   t: "Confidencialidad de la información",v3:3,
                                   y: "Autenticidad de la información",v4:4
                                   })                           
                              Res.set("49",{
                                   n:"Suplantación de IP", v1:1,
                                   e: "Olfateo de contraseñas",v2:2,
                                   t: "Manipulación de datos",v3:3,
                                   y: "Denegación de servicio (DOS)",v4:4
                                   })                           
                              Res.set("50",{
                                   n:"Identificación", v1:1,
                                   e: "Autorización",v2:2,
                                   t: "Autenticación",v3:3,
                                   y: "Contabilidad",v4:4
                                   })                           
                              Res.set("51",{
                                   n:"Principio de privilegio agregado", v1:1,
                                   e: "Principio de todo privilegio",v2:2,
                                   t: "Principio de privilegio efectivo",v3:3,
                                   y: "Principio de privilegio mínimo",v4:4
                                   })                           
                              Res.set("52",{
                                   n:"Para crear datos aleatorios que puedan usarse para probar programas antes de implementarlos", v1:1,
                                   e: "Para garantizar que se detecten y corrijan las fallas y errores de codificación del programa.",v2:2,
                                   t: "Para comprobar la funcionalidad del programa",v3:3,
                                   y: "Comparar versiones del código fuente antes de transferirlo al entorno de prueba.",v4:4
                                   })                           
                              Res.set("53",{
                                   n:"Operaciones de negocios", v1:1,
                                   e: "Tecnologías de la información",v2:2,
                                   t: "Compra",v3:3,
                                   y: "Recursos humanos",v4:4
                                   })                           
                              Res.set("54",{
                                   n:"Porque los búferes solo pueden contener cierta cantidad de datos.", v1:1,
                                   e: "Porque no se comprueba la longitud adecuada de los datos de entrada al momento de la entrada.",v2:2,
                                   t: "Porque son una debilidad fácil de explotar.",v3:3,
                                   y: "Debido a la memoria del sistema insuficiente",v4:4
                                   })                           
                              Res.set("55",{
                                   n:"Definición de requisitos del sistema", v1:1,
                                   e: "Diseño de sistemas",v2:2,
                                   t: "Desarrollo del programa",v3:3,
                                   y: "Prueba del programa",v4:4
                                   })                           
                              Res.set("56",{
                                   n:"Elimina el riesgo y reduce el potencial de pérdida", v1:1,
                                   e: "Mitigar el riesgo y eliminar el potencial de pérdida",v2:2,
                                   t: "Mitigar el riesgo y reducir el potencial de pérdida",v3:3,
                                   y: "Elimina el riesgo y la posibilidad de pérdidas",v4:4
                                   })                           
                             
                                   Res.set("58",{
                                        n:"El modelo de cascada", v1:1,
                                        e: "El modelo Waterfall modificado",v2:2,
                                        t: "El modelo espiral",v3:3,
                                        y: "El modelo de parche crítico (CPM)",v4:4
                                        })                           
                                   Res.set("59",{
                                        n:"Codificación", v1:1,
                                        e: "Diseño de producto",v2:2,
                                        t: "Planes y requisitos de software",v3:3,
                                        y: "Diseño detallado",v4:4
                                        })                           
                                   Res.set("60",{
                                        n:"Gestión de la configuración", v1:1,
                                        e: "Gestión del cambio",v2:2,
                                        t: "Gestión de problemas",v3:3,
                                        y: "Manejo de problemas",v4:4
                                        })                           
                                   Res.set("61",{
                                        n:"Una descripción formal de la especificación de ID de control de acceso.", v1:1,
                                        e: "Una descripción formal de la política de seguridad.",v2:2,
                                        t: "Una descripción formal de una etiqueta de sensibilidad.",v3:3,
                                        y: "Ninguna de las opciones.",v4:4
                                        })                           
                                   Res.set("62",{
                                        n:"Fraggle", v1:1,
                                        e: "Ingeniería social",v2:2,
                                        t: "Spoofing",v3:3,
                                        y: "Lágrima",v4:4
                                        })                           
                                   Res.set("63",{
                                        n:"Desbordamiento de búfer", v1:1,
                                        e: "inyección SQL",v2:2,
                                        t: "Secuencias de comandos entre sitios (XSS)",v3:3,
                                        y: "Todas las opciones.",v4:4
                                        })                           
                                   Res.set("64",{
                                        n:"Ataque de fuerza bruta", v1:1,
                                        e: "Ataque de suplantación",v2:2,
                                        t: "Ataque de hombre en el medio",v3:3,
                                        y: "Ataque de denegación de servicio",v4:4
                                        })                           
                                   Res.set("65",{
                                        n:"Teardrop", v1:1,
                                        e: "Smurf",v2:2,
                                        t: "Ping of death",v3:3,
                                        y: "Spoofing",v4:4
                                        })                           
                                  

            
                export { Res}
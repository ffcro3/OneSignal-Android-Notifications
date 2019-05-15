.then(
                        Parameters.findOne({  
                            id: Parameters.id,
                            order: [['createdAt', 'DESC']]
                          }).then(Parameters => {
                            Parameters.updateAttributes({
                                id_pergunta: "Alterado"
                            })
                          })                          
                    );
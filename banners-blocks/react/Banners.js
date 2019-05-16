import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import InfoBanners from './InfoBanners';
import styles from './styles.css';
import classnames from 'classnames';

const DEFAULT_MAX_ITEMS = 3;

export default class Banners extends Component {
    static defaultProps= {       
        titulo: "titulo",
        images: [],
        maxItems: DEFAULT_MAX_ITEMS
    }
        
    
    static uiSchema = {
        banners: {
          items: {
            images: {
              'ui:widget': 'image-uploader',
            },
          }
        }
    }

    static getSchema = (props) => {
        return {
            title: 'Banners Block',
            type: 'object',
            properties: {
                titulo: {
                    title: 'Título',
                    type: 'string',
                    default: 'Título del bloque'
                },
                maxItems: {
                    title: 'Máximo de imágenes por fila',
                    type: 'number',
                    default: Banners.defaultProps.maxItems
                },
                images: {
                    minItems: 1,
                    title: 'Bikini',
                    type: 'array',
                    items: {
                        title: 'Bikini',
                        type: 'object',
                        properties: {                        
                            subtitulo: {
                                title: 'Título Superior',
                                type: 'string',
                                default: 'Título superior de la imagen'
                            },
                            image: {
                                default: '',
                                title: 'Imagen',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            boton: {
                                title: 'Texto Botón',
                                type: 'string',
                                default: 'Texto del botón'
                            },
                            link: {
                                title: 'Link',
                                type: 'string',
                                default: 'Link del producto'
                            }
                        },                    
                    },
                },
            },
        }
    }
    
    render(){
        const {
            images,
            titulo,
            maxItems
        } = this.props
        return(
            <Grid className="mt5">
                <Row>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    <Col sm={2} className={classnames(styles.titulo, "tc f4")}>{titulo}</Col>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    {images.map((d, i) => 
                        <InfoBanners img={d.image} boton={d.boton} subtitulo={d.subtitulo} link={d.link} maxItems={maxItems}/> 
                    )}   
                </Row>
            </Grid>           
        );
    }
}
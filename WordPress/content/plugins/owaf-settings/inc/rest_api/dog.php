<?php


// Fonction appelée lors du hook rest api init, champs
function owaf_dog_register_rest_fields() {


    register_rest_field(
    'dog',
    'genre',
    [
      'get_callback' => 'owaf_rest_api_genre',
      'update_callback' => null,
      'schema' => null
    ]
    );

    register_rest_field(
    'dog',
    'naiss',
    [
     'get_callback' => 'owaf_rest_api_naiss',
     'update_callback' => null,
     'schema' => null
    ]
    );

    register_rest_field(
    'dog',
    'dog_img',
    [
     'get_callback' => 'owaf_rest_api_dog_img',
     'update_callback' => null,
     'schema' => null
    ]
    );

    register_rest_field(
    'dog',
    'maitre',
    [
     'get_callback' => 'owaf_rest_api_maitre',
     'update_callback' => null,
     'schema' => null
    ]
    );
}

function owaf_rest_api_genre( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'genre', true);


}

function owaf_rest_api_naiss( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'naiss', true);
}


function owaf_rest_api_dog_img( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'dog_img', true);
}


function owaf_rest_api_maitre( $object, $field_name, $request) {

  return get_post_meta($object['id'], 'maitre', true);
}

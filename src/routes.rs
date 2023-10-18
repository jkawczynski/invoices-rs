use axum::{routing::get, Router};

use crate::{
    controllers::{clients, index, statics},
    AppState,
};

pub fn app_router() -> Router<AppState> {
    let router: Router<AppState> = Router::new()
        .route("/", get(index))
        .nest("/clients", client_router())
        .nest_service("/static", get(statics::static_file_handler));

    return router;
}

fn client_router() -> Router<AppState> {
    let router: Router<AppState> = Router::new()
        .route(
            "/",
            get(clients::get_clients_list).post(clients::post_create_client),
        )
        .route("/create", get(clients::get_create_client))
        .route(
            "/:client_uuid",
            get(clients::get_client)
                .put(clients::put_client)
                .delete(clients::delete_client),
        );
    return router;
}

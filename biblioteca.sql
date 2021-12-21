

/*==============================================================*/
/* Table: AUTORES                                               */
/*==============================================================*/
create table AUTORES
(
   ID_AUTORES           int not null,
   NOMBRES_AUTOR        char(100),
   APELLIDOS_AUTOR      char(100),
   primary key (ID_AUTORES)
);

alter table AUTORES comment 'AUTORES';

/*==============================================================*/
/* Table: CATEGORIAS                                            */
/*==============================================================*/
create table CATEGORIAS
(
   ID_CATEGORIAS        int not null,
   CATEGORIAS           varchar(50),
   primary key (ID_CATEGORIAS)
);

alter table CATEGORIAS comment 'CATEGORÍAS';

/*==============================================================*/
/* Table: COMENTARIO                                            */
/*==============================================================*/
create table COMENTARIO
(
   ID_COMENTARIO        int not null,
   NOMBRE               varchar(50) not null,
   CORREO               varchar(50) not null,
   DESCIPCION           varchar(300) not null,
   primary key (ID_COMENTARIO)
);

alter table COMENTARIO comment 'Comentario';

/*==============================================================*/
/* Table: DOCUMENTOS_DIGITALES                                  */
/*==============================================================*/
create table DOCUMENTOS_DIGITALES
(
   COD_DOCUMENTO        int not null,
   ID_AUTORES           int not null,
   ID_CATEGORIAS        int not null,
   ID_EDITORIALES       int not null,
   TITULO               varchar(60) not null,
   ANO                  varchar(4) not null,
   primary key (COD_DOCUMENTO)
);

alter table DOCUMENTOS_DIGITALES comment 'DOCUMENTOS DIGITALES';

/*==============================================================*/
/* Table: EDITORIALES                                           */
/*==============================================================*/
create table EDITORIALES
(
   ID_EDITORIALES       int not null,
   NOMBRE_EDITORIAL     varchar(50),
   PAIS                 varchar(30),
   primary key (ID_EDITORIALES)
);

alter table EDITORIALES comment 'EDITORIALES';

/*==============================================================*/
/* Table: FACULTADES                                            */
/*==============================================================*/
create table FACULTADES
(
   ID_FACULTADES        int not null,
   NOMBRE_FACULTAD      char(100),
   primary key (ID_FACULTADES)
);

alter table FACULTADES comment 'FACULTADES';

/*==============================================================*/
/* Table: SEXO                                                  */
/*==============================================================*/
create table SEXO
(
   ID_TIPO2             int not null,
   TIPO                 varchar(25) not null,
   DESCRIPCION          varchar(100) not null,
   primary key (ID_TIPO2)
);

alter table SEXO comment 'sexo';

/*==============================================================*/
/* Table: TIPO_USUARIO                                          */
/*==============================================================*/
create table TIPO_USUARIO
(
   ID_TIPO              int not null,
   TIPO                 varchar(25) not null,
   DESCRIPCION          varchar(100) not null,
   primary key (ID_TIPO)
);

alter table TIPO_USUARIO comment 'tipo_usuario';

/*==============================================================*/
/* Table: USUARIOS                                              */
/*==============================================================*/
create table USUARIOS
(
   ID                   int not null,
   ID_TIPO              int not null,
   TIP_ID_TIPO          int not null,
   NOMBRE_USUARIO       char(100),
   APELLIDO_USUARIO     char(100),
   CORREO               varchar(50),
   CONTRASENA           varchar(100),
   EDAD                 numeric(8,0),
   CONTACTO             numeric(8,0),
   CELULAR              varchar(10),
   DIRECCION            varchar(200),
   USERNAME             varchar(50),
   primary key (ID)
);

alter table USUARIOS comment 'USUARIOS';

/*==============================================================*/
/* Table: USUARIO_LOG                                           */
/*==============================================================*/
create table USUARIO_LOG
(
   ID_RE_USUA           int not null,
   ID                   int not null,
   USUA_CORREO          varchar(100),
   HORA_INICIO_SESION   timestamp,
   DESCONECTADO         varchar(100),
   ESTADO               int,
   primary key (ID_RE_USUA)
);

alter table USUARIO_LOG comment 'USUARIO_LOG';

/*==============================================================*/
/* Table: VISUALIZAR_LIBRO                                      */
/*==============================================================*/
create table VISUALIZAR_LIBRO
(
   ID_DOCUMENTO         int not null,
   COD_DOCUMENTO        int not null,
   ID_RE_USUA           int not null,
   FECHA_VISUALIZACION  datetime,
   primary key (ID_DOCUMENTO)
);

alter table VISUALIZAR_LIBRO comment 'VISUALIZAR LIBRO';

alter table DOCUMENTOS_DIGITALES add constraint FK_CONTIENE foreign key (ID_EDITORIALES)
      references EDITORIALES (ID_EDITORIALES) on delete restrict on update restrict;

alter table DOCUMENTOS_DIGITALES add constraint FK_DIVIDIDA foreign key (ID_CATEGORIAS)
      references CATEGORIAS (ID_CATEGORIAS) on delete restrict on update restrict;

alter table DOCUMENTOS_DIGITALES add constraint FK_TIENE foreign key (ID_AUTORES)
      references AUTORES (ID_AUTORES) on delete restrict on update restrict;

alter table USUARIOS add constraint FK_RELATIONSHIP_10 foreign key (ID_TIPO)
      references SEXO (ID_TIPO2) on delete restrict on update restrict;

alter table USUARIOS add constraint FK_RELATIONSHIP_12 foreign key (TIP_ID_TIPO)
      references TIPO_USUARIO (ID_TIPO) on delete restrict on update restrict;

alter table USUARIOS add constraint FK_RELATIONSHIP_2 foreign key ()
      references FACULTADES (ID_FACULTADES) on delete restrict on update restrict;

alter table USUARIO_LOG add constraint FK_ANADIDO foreign key (ID)
      references USUARIOS (ID) on delete restrict on update restrict;

alter table VISUALIZAR_LIBRO add constraint FK_RELATIONSHIP_11 foreign key (ID_RE_USUA)
      references USUARIO_LOG (ID_RE_USUA) on delete restrict on update restrict;

alter table VISUALIZAR_LIBRO add constraint FK_SE foreign key (COD_DOCUMENTO)
      references DOCUMENTOS_DIGITALES (COD_DOCUMENTO) on delete restrict on update restrict;

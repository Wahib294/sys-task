PGDMP  	                    |            bug_tracker %   14.13 (Ubuntu 14.13-0ubuntu0.22.04.1)     16.3 (Ubuntu 16.3-1.pgdg22.04+1) $    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            @           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            A           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            B           1262    63268    bug_tracker    DATABASE     w   CREATE DATABASE bug_tracker WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE bug_tracker;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false            C           0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    4            �            1259    63529 	   bugreport    TABLE     ^  CREATE TABLE public.bugreport (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    status boolean NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "assigneeId" integer,
    "reporterId" integer
);
    DROP TABLE public.bugreport;
       public         heap    postgres    false    4            �            1259    63528    bugreport_id_seq    SEQUENCE     �   CREATE SEQUENCE public.bugreport_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.bugreport_id_seq;
       public          postgres    false    213    4            D           0    0    bugreport_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.bugreport_id_seq OWNED BY public.bugreport.id;
          public          postgres    false    212            �            1259    63519 
   fileupload    TABLE     �   CREATE TABLE public.fileupload (
    id integer NOT NULL,
    filename character varying(255) NOT NULL,
    filepath character varying(255) NOT NULL,
    "uploadedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "bugReportIdId" integer
);
    DROP TABLE public.fileupload;
       public         heap    postgres    false    4            �            1259    63518    fileupload_id_seq    SEQUENCE     �   CREATE SEQUENCE public.fileupload_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.fileupload_id_seq;
       public          postgres    false    211    4            E           0    0    fileupload_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.fileupload_id_seq OWNED BY public.fileupload.id;
          public          postgres    false    210            �            1259    63270    role    TABLE     _   CREATE TABLE public.role (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);
    DROP TABLE public.role;
       public         heap    postgres    false    4            �            1259    63540    staff    TABLE     �   CREATE TABLE public.staff (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(255) NOT NULL,
    "roleName" character varying(50)
);
    DROP TABLE public.staff;
       public         heap    postgres    false    4            �            1259    63539    staff_id_seq    SEQUENCE     �   CREATE SEQUENCE public.staff_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.staff_id_seq;
       public          postgres    false    215    4            F           0    0    staff_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.staff_id_seq OWNED BY public.staff.id;
          public          postgres    false    214            �           2604    63532    bugreport id    DEFAULT     l   ALTER TABLE ONLY public.bugreport ALTER COLUMN id SET DEFAULT nextval('public.bugreport_id_seq'::regclass);
 ;   ALTER TABLE public.bugreport ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            �           2604    63522    fileupload id    DEFAULT     n   ALTER TABLE ONLY public.fileupload ALTER COLUMN id SET DEFAULT nextval('public.fileupload_id_seq'::regclass);
 <   ALTER TABLE public.fileupload ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �           2604    63543    staff id    DEFAULT     d   ALTER TABLE ONLY public.staff ALTER COLUMN id SET DEFAULT nextval('public.staff_id_seq'::regclass);
 7   ALTER TABLE public.staff ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            :          0    63529 	   bugreport 
   TABLE DATA           y   COPY public.bugreport (id, title, description, status, "createdAt", "updatedAt", "assigneeId", "reporterId") FROM stdin;
    public          postgres    false    213   *       8          0    63519 
   fileupload 
   TABLE DATA           [   COPY public.fileupload (id, filename, filepath, "uploadedAt", "bugReportIdId") FROM stdin;
    public          postgres    false    211   �*       6          0    63270    role 
   TABLE DATA           (   COPY public.role (id, name) FROM stdin;
    public          postgres    false    209   �*       <          0    63540    staff 
   TABLE DATA           J   COPY public.staff (id, username, email, password, "roleName") FROM stdin;
    public          postgres    false    215   +       G           0    0    bugreport_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.bugreport_id_seq', 7, true);
          public          postgres    false    212            H           0    0    fileupload_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.fileupload_id_seq', 1, false);
          public          postgres    false    210            I           0    0    staff_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.staff_id_seq', 14, true);
          public          postgres    false    214            �           2606    63527 )   fileupload PK_5fd39e21a668087fd0495deb467 
   CONSTRAINT     i   ALTER TABLE ONLY public.fileupload
    ADD CONSTRAINT "PK_5fd39e21a668087fd0495deb467" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.fileupload DROP CONSTRAINT "PK_5fd39e21a668087fd0495deb467";
       public            postgres    false    211            �           2606    63538 (   bugreport PK_aa2270441cb6e95c5899a8a0ff8 
   CONSTRAINT     h   ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT "PK_aa2270441cb6e95c5899a8a0ff8" PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.bugreport DROP CONSTRAINT "PK_aa2270441cb6e95c5899a8a0ff8";
       public            postgres    false    213            �           2606    63512 #   role PK_ae4578dcaed5adff96595e61660 
   CONSTRAINT     e   ALTER TABLE ONLY public.role
    ADD CONSTRAINT "PK_ae4578dcaed5adff96595e61660" PRIMARY KEY (name);
 O   ALTER TABLE ONLY public.role DROP CONSTRAINT "PK_ae4578dcaed5adff96595e61660";
       public            postgres    false    209            �           2606    63545 $   staff PK_e4ee98bb552756c180aec1e854a 
   CONSTRAINT     d   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT "PK_e4ee98bb552756c180aec1e854a" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.staff DROP CONSTRAINT "PK_e4ee98bb552756c180aec1e854a";
       public            postgres    false    215            �           2606    63547 $   staff UQ_f14bb0d0bb249d9f0974a876bde 
   CONSTRAINT     l   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT "UQ_f14bb0d0bb249d9f0974a876bde" UNIQUE (username, email);
 P   ALTER TABLE ONLY public.staff DROP CONSTRAINT "UQ_f14bb0d0bb249d9f0974a876bde";
       public            postgres    false    215    215            �           2606    63277    role role_name_key 
   CONSTRAINT     M   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_name_key UNIQUE (name);
 <   ALTER TABLE ONLY public.role DROP CONSTRAINT role_name_key;
       public            postgres    false    209            �           2606    63548 )   fileupload FK_5da3b0f95c4b34d722dfeba9c39    FK CONSTRAINT     �   ALTER TABLE ONLY public.fileupload
    ADD CONSTRAINT "FK_5da3b0f95c4b34d722dfeba9c39" FOREIGN KEY ("bugReportIdId") REFERENCES public.bugreport(id);
 U   ALTER TABLE ONLY public.fileupload DROP CONSTRAINT "FK_5da3b0f95c4b34d722dfeba9c39";
       public          postgres    false    211    213    3234            �           2606    63553 (   bugreport FK_a180c73478f19353c1b429a7f7f    FK CONSTRAINT     �   ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT "FK_a180c73478f19353c1b429a7f7f" FOREIGN KEY ("assigneeId") REFERENCES public.staff(id);
 T   ALTER TABLE ONLY public.bugreport DROP CONSTRAINT "FK_a180c73478f19353c1b429a7f7f";
       public          postgres    false    215    3236    213            �           2606    63558 (   bugreport FK_cb3296863447403537830f3ea18    FK CONSTRAINT     �   ALTER TABLE ONLY public.bugreport
    ADD CONSTRAINT "FK_cb3296863447403537830f3ea18" FOREIGN KEY ("reporterId") REFERENCES public.staff(id);
 T   ALTER TABLE ONLY public.bugreport DROP CONSTRAINT "FK_cb3296863447403537830f3ea18";
       public          postgres    false    213    3236    215            �           2606    63563 $   staff FK_fe8ae5c2fa476468bfab90b2002    FK CONSTRAINT     �   ALTER TABLE ONLY public.staff
    ADD CONSTRAINT "FK_fe8ae5c2fa476468bfab90b2002" FOREIGN KEY ("roleName") REFERENCES public.role(name);
 P   ALTER TABLE ONLY public.staff DROP CONSTRAINT "FK_fe8ae5c2fa476468bfab90b2002";
       public          postgres    false    215    209    3230            :   �   x���;� �N����ŐP�)�
ۑ��C��
)�4�L�4Z�q�Fܧ���O[����� IUx���,�E,n,Hr��D1� >�.�^�X�Y]b���a�xyw����M٧�߭[�����)�m�*�sSh2����oY�RO      8      x������ � �      6   &   x�3�tL����2�tI-K��/H-�2�t����� ���      <   �  x�m�ǒ�P��5>G���k��p	"�f�@��H���֮�q6��}uꞋ!{NO�=�G�� �K���0��ѴK�
�M15:���g�β�)]]����m˘*e�S��&eZ-p����=~��M�6l!�0�
ӝ�`��奐�d�e}��Ҭ�ehf��Gt~A ���\���nRgK���������iDω9��+��ʞ���83��:�g��u4DE�D����.� �{�f�M���'�SE�� vB���b��5�6��d$1�3[��������x�Y ("5 �*"0{!�x��$T�c]��ۭ���M�VrE���ҿ�1Eی�O�t�A��#��~�ܖƤ�V1�Yk�L���|����M���H�Z��r/�C���՘4�%Xu��^H�򬗞�g���@M���	r�!�.i#������˳B�����c���g<.<��6<�!99ugW����t�臈��!���W��=������]1֡ x�o�=�ޥ�$U4#�ATCe�\�6v7I}��L[2hu����B��%�����Dd/̜u=��Yw	lk�(��^~gq�|�ތѥ)V�$��`��h�G�˦J�t���xS_';��¶P��O����c{�?۫��ٖ����
��2��%�Ezrusy��-�&Ş1��;�+����b���\RR     
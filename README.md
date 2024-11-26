## for help 
nest --help
## for simulate use below flag
--dry-run
## create new modules
nest generate module users

## create new controller
nest g controller auth --no-spec

## create new service
 nest g service auth/providers/auth --flat --no-spec

 ## databse set up package 
 typeorm@0.3.20 @nestjs/typeorm@10.0.2 pg@8.11.5
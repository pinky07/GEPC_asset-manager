

CREATE TABLE [ASSET_ALLOCATION_MODELING_BENCHMARK]
( 
	[AAMB_PK]            integer  NOT NULL ,
	[AAMB_Name]          varchar(160)  NULL ,
	[AAMB_Curation_TYPE_PK] integer  NOT NULL ,
	[LIQUIDITY_PK]       integer  NOT NULL ,
	[Assumption_PK]      integer  NOT NULL ,
	[Goal_Based_Category_PK] integer  NOT NULL ,
	[LDI_Category_PK]    integer  NOT NULL ,
	[BETA_GROUP_PK]      integer  NOT NULL ,
	[AAMB_Audience_Type_PK]  integer  NULL ,
	[Derived_Ind]        char(1)  NOT NULL ,
	[Custom_Asset_Ind]   char(1)  NOT NULL ,
	[Sensitivity_Ind]    char(1)  NOT NULL ,
	[Admin_Asset_Ind]    char(1)  NOT NULL ,
	[AAMB_Description]   varchar(250)  NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [ASSET_ALLOCATION_MODELING_BENCHMARK]
	ADD  PRIMARY KEY  CLUSTERED ([AAMB_PK] ASC)
go

ALTER TABLE [ASSET_ALLOCATION_MODELING_BENCHMARK]
	ADD  UNIQUE ([AAMB_Curation_TYPE_PK]  ASC,[Assumption_PK]  ASC,[BETA_GROUP_PK]  ASC,[Goal_Based_Category_PK]  ASC,[LDI_Category_PK]  ASC,[LIQUIDITY_PK]  ASC)
go

CREATE TABLE [BETA_GROUP]
( 
	[BETA_GROUP_PK]      integer  NOT NULL ,
	[Beta_Group_Name]    varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [BETA_GROUP]
	ADD  PRIMARY KEY  CLUSTERED ([BETA_GROUP_PK] ASC)
go

CREATE TABLE [CLIENT]
( 
	[CLIENT_PK]          integer  NOT NULL ,
	[Org_TYPE_PK]        integer  NOT NULL ,
	[Preferred_Name_Short] varchar(160)  NOT NULL ,
	[Preferred_Name_Long] varchar(250)  NULL ,
	[Legal_Client_Name]  varchar(160)  NULL ,
	[Client_Revenue_Amt] decimal(12,2)  NULL ,
	[Dedicated_Investment_Team_Ind] char(1)  NOT NULL ,
	[Estimated_Manageable_Assets_Amount] decimal(12,2)  NULL ,
	[Stock_Exchange_Ticker] varchar(10)  NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL ,
	[Growth_Category]    varchar(10)  NULL ,
	[Hire_Date]          datetime  NULL ,
	[Relationship_End_Date] datetime  NULL ,
	[NEPC_Client_NickName] varchar(10)  NULL ,
	[Client_Revenue_As_Of_Date] datetime  NULL ,
	[General_Phone]      char(12)  NULL ,
	[General_Fax]        char(12)  NULL ,
	[Website]            varchar(250)  NULL ,
	[Client_NEPC_CODE]   varchar(160)  NULL ,
	[Previous_Consulting_Company_ORG_PK] integer  NOT NULL ,
	[CLIENT_LIFECYCLE_PK] integer  NOT NULL ,
	[INDUSTRY_VERTICAL_PK] integer  NOT NULL ,
	[Legal_Name_Source]  varchar(160)  NULL ,
	[Estimated_Manageable_Assets_Amounts_As_Of_Date] datetime  NULL ,
	[Country_of_Domicile_PK] integer  NOT NULL ,
	[GROWTH_CATEGORY_PK] integer  NOT NULL 
)
go

ALTER TABLE [CLIENT]
	ADD  PRIMARY KEY  CLUSTERED ([CLIENT_PK] ASC)
go

CREATE TABLE [GOAL_BASED_CATEGORY]
( 
	[Goal_Based_Category_PK] integer  NOT NULL ,
	[Goal_Based_Category_Name] varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [GOAL_BASED_CATEGORY]
	ADD  PRIMARY KEY  CLUSTERED ([Goal_Based_Category_PK] ASC)
go

CREATE TABLE [INVESTMENT_STRUCTURE]
( 
	[INVESTMENT_STRUCTURE_PK] integer  NOT NULL ,
	[INVESTMENT_STRUCTURE_Name] varchar(160)  NOT NULL ,
	[Duration_Of_Liability] integer  NULL ,
	[Plan_Funded_Amount] decimal(12,2)  NULL ,
	[PLAN_PK]            integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [INVESTMENT_STRUCTURE]
	ADD  PRIMARY KEY  CLUSTERED ([INVESTMENT_STRUCTURE_PK] ASC)
go

CREATE TABLE [INVESTMENT_STRUCTURE_COMPONENT]
( 
	[INVESTMENT_STRUCTURE_COMPONENT_PK] integer  NOT NULL ,
	[INVESTMENT_STRUCTURE_COMPONENT_Alias] varchar(10)  NULL ,
	[IF_Short_Name]      varchar(40)  NOT NULL ,
	[PLAN_HOLDING_PK]    integer  NOT NULL ,
	[Performance_End_Date] datetime  NULL ,
	[Information_As_Of_Date] datetime  NULL ,
	[Color_Assignment]   varchar(10)  NULL ,
	[Expense_Ratio]      integer  NOT NULL ,
	[Actual_MV]          decimal(12,2)  NULL ,
	[LIQUIDITY_PK]       integer  NOT NULL ,
	[Cost_Basis]         integer  NOT NULL ,
	[Display_Order]      integer  NULL ,
	[Overwrite_Benchmark_Ind] char(1)  NOT NULL ,
	[PARENT_INVESTMENT_STRUCTURE_COMPONENT_PK] integer  NOT NULL ,
	[INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK] integer  NOT NULL ,
	[MANAGEMENT_STYLE_PK] integer  NOT NULL ,
	[CRM_InvProduct_Link] varchar(250)  NULL ,
	[Policy_Weight]      decimal(7,4)  NULL ,
	[Short_Description]  varchar(160)  NULL ,
	[INVESTMENT_STRUCTURE_PK] integer  NOT NULL ,
	[AAMB_PK]            integer  NOT NULL ,
	[Goal_Based_Category_PK] integer  NOT NULL ,
	[LDI_Category_PK]    integer  NOT NULL ,
	[BETA_GROUP_PK]      integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [INVESTMENT_STRUCTURE_COMPONENT]
	ADD  PRIMARY KEY  CLUSTERED ([INVESTMENT_STRUCTURE_COMPONENT_PK] ASC)
go

ALTER TABLE [INVESTMENT_STRUCTURE_COMPONENT]
	ADD  UNIQUE ([INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK]  ASC,[INVESTMENT_STRUCTURE_PK]  ASC,[LDI_Category_PK]  ASC,[LIQUIDITY_PK]  ASC,[MANAGEMENT_STYLE_PK]  ASC,[PARENT_INVESTMENT_STRUCTURE_COMPONENT_PK]  ASC,[PLAN_HOLDING_PK]  ASC,[AAMB_PK]  ASC,[BETA_GROUP_PK]  ASC,[Goal_Based_Category_PK]  ASC)
go

CREATE TABLE [INVESTMENT_STRUCTURE_COMPONENT_TYPE]
( 
	[INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK] integer  NOT NULL ,
	[INVESTMENT_STRUCTURE_COMPONENT_Type_Name] varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [INVESTMENT_STRUCTURE_COMPONENT_TYPE]
	ADD  PRIMARY KEY  CLUSTERED ([INVESTMENT_STRUCTURE_COMPONENT_TYPE_PK] ASC)
go

CREATE TABLE [LDI_CATEGORY]
( 
	[LDI_Category_PK]    integer  NOT NULL ,
	[LDI_Category_Name]  varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [LDI_CATEGORY]
	ADD  PRIMARY KEY  CLUSTERED ([LDI_Category_PK] ASC)
go

CREATE TABLE [LIQUIDITY]
( 
	[LIQUIDITY_PK]       integer  NOT NULL ,
	[Liquidity_Name]     varchar(250)  NOT NULL 
)
go

ALTER TABLE [LIQUIDITY]
	ADD  PRIMARY KEY  CLUSTERED ([LIQUIDITY_PK] ASC)
go

CREATE TABLE [MANAGEMENT_STYLE]
( 
	[MANAGEMENT_STYLE_PK] integer  NOT NULL ,
	[Management_Style_Name] varchar(10)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [MANAGEMENT_STYLE]
	ADD  PRIMARY KEY  CLUSTERED ([MANAGEMENT_STYLE_PK] ASC)
go

CREATE TABLE [MIX]
( 
	[MIX_PK]             integer  NOT NULL ,
	[MIX_Name]           varchar(10)  NULL ,
	[Information_As_Of_Date] datetime  NULL ,
	[Session_ID]         int  NULL ,
	[Analyst_ID_PK]      integer  NOT NULL ,
	[Funded_Status]      varchar(10)  NULL ,
	[Mix_Type_PK]        integer  NOT NULL ,
	[Mix_Description]    varchar(250)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [MIX]
	ADD  PRIMARY KEY  CLUSTERED ([MIX_PK] ASC)
go

ALTER TABLE [MIX]
	ADD  UNIQUE ([MIX_Name]  ASC,[Analyst_ID_PK]  ASC,[Mix_Type_PK]  ASC)
go

CREATE TABLE [MIX_INVESTMENT_STRUCTURE_COMPONENT]
( 
	[INVESTMENT_STRUCTURE_COMPONENT_MIX_PK] integer  NOT NULL ,
	[Allocation_Percent] decimal(7,4)  NOT NULL ,
	[Overwrite_Allocation_Ind] char(1)  NOT NULL ,
	[INVESTMENT_STRUCTURE_COMPONENT_PK] integer  NOT NULL ,
	[MIX_PK]             integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [MIX_INVESTMENT_STRUCTURE_COMPONENT]
	ADD  PRIMARY KEY  CLUSTERED ([INVESTMENT_STRUCTURE_COMPONENT_MIX_PK] ASC)
go

ALTER TABLE [MIX_INVESTMENT_STRUCTURE_COMPONENT]
	ADD  UNIQUE ([MIX_PK]  ASC,[INVESTMENT_STRUCTURE_COMPONENT_PK]  ASC)
go

CREATE TABLE [MIX_TYPE]
( 
	[Mix_Type_PK]        integer  NOT NULL ,
	[Mix_Type_Name]      varchar(10)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [MIX_TYPE]
	ADD  PRIMARY KEY  CLUSTERED ([Mix_Type_PK] ASC)
go

CREATE TABLE [PLAN]
( 
	[PLAN_PK]            integer  NOT NULL ,
	[CLIENT_PK]          integer  NOT NULL ,
	[PLAN_TYPE_PK]       integer  NOT NULL ,
	[NEPC_REPORTING_TEAM] integer  NOT NULL ,
	[IMPLEMENTATION_STRATEGY_PK] integer  NOT NULL ,
	[NEPC_Plan_Code]     varchar(160)  NULL ,
	[Legal_Plan_Name]    varchar(160)  NOT NULL ,
	[Plan_Preferred_Short_Name] varchar(10)  NULL ,
	[Plan_Preferred_Long_Name] varchar(250)  NULL ,
	[NEPC_Plan_NickName] varchar(10)  NULL ,
	[Plan_Active_Ind]    char(1)  NOT NULL ,
	[Virtual_Ind]        char(1)  NOT NULL ,
	[Managed_at_Client_Ind] char(1)  NOT NULL ,
	[Union_Bug_Ind]      char(1)  NOT NULL ,
	[Taxable_Flag]       char(1)  NOT NULL ,
	[ERISA_Ind]          char(1)  NOT NULL ,
	[Plan_Frozen_Ind]    char(1)  NOT NULL ,
	[Discretionary_Services_Ind] char(1)  NOT NULL ,
	[Asset_Allocation_Ind] char(1)  NOT NULL ,
	[Captive_Ind]        char(1)  NOT NULL ,
	[Onshore_Ind]        char(1)  NOT NULL ,
	[Extrinsically_Managed_Assets_Ind] char(1)  NOT NULL ,
	[Actual_Participants_Num] integer  NULL ,
	[Fiscal_Month_Num]   integer  NULL ,
	[Total_NEPC_and_Extrinsic_Assets] decimal(12,2)  NULL ,
	[Total_NEPC_and_Extrinsic_Assets_As_Of_Date] datetime  NULL ,
	[Risk_Profile]       varchar(10)  NULL ,
	[Funded_Amount]      integer  NULL ,
	[Assets_Restriction] varchar(160)  NULL ,
	[Type_Of_Insurance_Asset] varchar(160)  NULL ,
	[Country_of_Domicile] varchar(160)  NOT NULL ,
	[Inception_Date]     datetime  NULL ,
	[Frozen_Date]        datetime  NULL ,
	[Total_NEPC_Managed_Plan_Assets_As_Of_Date] datetime  NULL ,
	[Termination_Date]   datetime  NULL ,
	[Tax_ID]             varchar(160)  NULL ,
	[IF_Collect_Plan_Authorization_Letter_Ind] char(1)  NOT NULL ,
	[FREQUENCY_PK]       integer  NOT NULL ,
	[CURRENCY_PK]        integer  NOT NULL ,
	[Legal_Name_Source]  varchar(10)  NULL ,
	[Acct_Number_at_Manager] varchar(160)  NULL ,
	[Qualified_Participants_Num] integer  NULL ,
	[Actual_Participants_Num_As_Of_Date] datetime  NULL ,
	[Country_of_Domicile_PK] integer  NOT NULL ,
	[NEPC_Responsible_Start_Date] datetime  NULL ,
	[AA_Display_Order]   integer  NULL ,
	[Tax_Jurisdiction_PK] integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [PLAN]
	ADD  PRIMARY KEY  CLUSTERED ([PLAN_PK] ASC)
go

CREATE TABLE [PLAN_HOLDING]
( 
	[PLAN_HOLDING_PK]    integer  NOT NULL ,
	[PLAN_PK]            integer  NOT NULL ,
	[Investable_Vehicle_Units_Number] integer  NULL ,
	[Virtual_Ind]        char(1)  NOT NULL ,
	[IF_COLLECT_Manager_Approved_Ind] char(1)  NOT NULL ,
	[IF_COLLECT_Reason_Not_Approved] varchar(250)  NULL ,
	[CLIENT_IMPLEMENTATION_STRATEGY_PK] integer  NOT NULL ,
	[Date_Originally_Funded] datetime  NULL ,
	[Full_Redemption_Decision_By_Client_Date] datetime  NULL ,
	[Full_Redemption_Complete_Date] datetime  NULL ,
	[Include_in_Discretionary_Reporting_Ind] char(1)  NOT NULL ,
	[Plan_Holding_Specific_Accts_Ind] char(1)  NOT NULL ,
	[DUE_DILIGENCE_RESPONSIBILITY_ORG_PK] integer  NOT NULL ,
	[Plan_Holding_Reporting_Name] varchar(10)  NOT NULL ,
	[IF_Data_Requested]  varchar(250)  NULL ,
	[On_boarded_Holding_Ind] char(1)  NOT NULL ,
	[PREFERRED_REPORTING_GROUP_PK] integer  NOT NULL ,
	[INVESTABLE_VEHICLE_PK] integer  NOT NULL ,
	[IF_Plan_Holding_Name] varchar(40)  NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [PLAN_HOLDING]
	ADD  PRIMARY KEY  CLUSTERED ([PLAN_HOLDING_PK] ASC)
go

CREATE TABLE [RETURN_SERIES]
( 
	[RETURN_SERIES_PK]   integer  NOT NULL ,
	[Return_Series_Name] varchar(250)  NOT NULL ,
	[AAMB_PK]            integer  NULL 
)
go

ALTER TABLE [RETURN_SERIES]
	ADD  PRIMARY KEY  CLUSTERED ([RETURN_SERIES_PK] ASC)
go

CREATE TABLE [dbo].[TAX_JURISDICTION]
( 
	[Tax_Jurisdiction_PK] integer  NOT NULL ,
	[Tax_Jurisdiction_Name] varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [dbo].[TAX_JURISDICTION]
	ADD  PRIMARY KEY  CLUSTERED ([Tax_Jurisdiction_PK] ASC)
go




CREATE TABLE [AAMB_AUDIENCE_TYPE]
( 
	[AAMB_Audience_Type_PK]  integer  NOT NULL ,
	[AAMB_Audience_Type_Name] varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [AAMB_AUDIENCE_TYPE]
	ADD  PRIMARY KEY  CLUSTERED ([AAMB_Audience_Type_PK] ASC)
go

CREATE TABLE [AAMB_CURATION_TYPE]
( 
	[AAMB_Curation_TYPE_PK] integer  NOT NULL ,
	[AAMB_Curation_TYPE_Name] varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [AAMB_CURATION_TYPE]
	ADD  PRIMARY KEY  CLUSTERED ([AAMB_Curation_TYPE_PK] ASC)
go

CREATE TABLE [ASSUMPTION]
( 
	[Assumption_PK]      integer  NOT NULL ,
	[Assumption_Name]    varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [ASSUMPTION]
	ADD  PRIMARY KEY  CLUSTERED ([Assumption_PK] ASC)
go

CREATE TABLE [ASSUMPTION_TYPE]
( 
	[ASSUMPTION_TYPE_PK] integer  NOT NULL ,
	[Assumption_Type_Name] varchar(160)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [ASSUMPTION_TYPE]
	ADD  PRIMARY KEY  CLUSTERED ([ASSUMPTION_TYPE_PK] ASC)
go

CREATE TABLE [ASSUMPTION_VALUE_SET]
( 
	[Assumption_Value_Set_PK] integer  NOT NULL ,
	[Version_PK]         int  NOT NULL ,
	[Assumption_PK]      integer  NOT NULL ,
	[arithmetic_expected_returns_30_year_assumptions] decimal(7,4)  NOT NULL ,
	[arithmetic_expected_returns_5_7_year_assumptions] decimal(7,4)  NOT NULL ,
	[geometric_expected_returns_30_year_assumptions] decimal(7,4)  NOT NULL ,
	[expected_std_dev_30_year_assumptions] decimal(7,4)  NOT NULL ,
	[geometric_expected_returns_5_7_year_assumptions] decimal(7,4)  NOT NULL ,
	[expected_std_dev_5_7_year_assumptions] decimal(7,4)  NOT NULL ,
	[assumption_value_yield] decimal(7,4)  NOT NULL ,
	[OAS]                float(53)  NULL ,
	[Standard_Deviation] decimal(7,4)  NOT NULL ,
	[Duration_Period]    float(53)  NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [ASSUMPTION_VALUE_SET]
	ADD  PRIMARY KEY  CLUSTERED ([Assumption_Value_Set_PK] ASC)
go

ALTER TABLE [ASSUMPTION_VALUE_SET]
	ADD  UNIQUE ([Version_PK]  ASC,[Assumption_PK]  ASC)
go

CREATE TABLE [CORRELATION]
( 
	[CORRELATION_PK]     integer  NOT NULL ,
	[Correlation_value]  integer  NOT NULL ,
	[Version_PK]         int  NOT NULL ,
	[Assumption_1_PK]    integer  NOT NULL ,
	[Assumption_2_PK]    integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [CORRELATION]
	ADD  PRIMARY KEY  CLUSTERED ([CORRELATION_PK] ASC)
go

ALTER TABLE [CORRELATION]
	ADD  UNIQUE ([Version_PK]  ASC,[Assumption_1_PK]  ASC,[Assumption_2_PK]  ASC)
go

CREATE TABLE [DERIVED_BENCHMARK_COMPONENT]
( 
	[Derived_Benchmark_Component_PK] integer  NOT NULL ,
	[AAMB_Allocation_Percentage] decimal(7,4)  NOT NULL ,
	[AAMB_Allocation_PK] integer  NOT NULL ,
	[AAMB_Derived_Benchmark_PK] integer  NOT NULL ,
	[Composite_Dependency_Level] integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [DERIVED_BENCHMARK_COMPONENT]
	ADD  PRIMARY KEY  CLUSTERED ([Derived_Benchmark_Component_PK] ASC)
go

ALTER TABLE [DERIVED_BENCHMARK_COMPONENT]
	ADD  UNIQUE ([AAMB_Derived_Benchmark_PK]  ASC,[AAMB_Allocation_PK]  ASC)
go

CREATE TABLE [SCENARIO]
( 
	[Scenario_ID_PK]     int  NOT NULL ,
	[Scenario_Name]      varchar(50) NOT NULL ,
	[Scenario_Desc]      varchar(250) NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [SCENARIO]
	ADD  PRIMARY KEY  CLUSTERED ([Scenario_ID_PK] ASC)
go

CREATE TABLE [SCENARIO_RETURN_ASSUMPTION]
( 
	[Scenario_Return_PK] integer  NOT NULL ,
	[Scenario_ID_PK]     int  NOT NULL ,
	[scenario_return_value] decimal(7,4)  NOT NULL ,
	[Period_Num]         int  NOT NULL ,
	[Assumption_PK]      integer  NOT NULL ,
	[Version_PK]         int  NOT NULL ,
	[ASSUMPTION_TYPE_PK] integer  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [SCENARIO_RETURN_ASSUMPTION]
	ADD  PRIMARY KEY  CLUSTERED ([Scenario_Return_PK] ASC)
go

ALTER TABLE [SCENARIO_RETURN_ASSUMPTION]
	ADD  UNIQUE ([Scenario_ID_PK]  ASC,[Assumption_PK]  ASC,[ASSUMPTION_TYPE_PK]  ASC,[Version_PK]  ASC)
go

CREATE TABLE [TAX_RATE]
( 
	[Tax_Rate_PK]        char(18)  NOT NULL ,
	[Income_Tax]         decimal(7,4)  NULL ,
	[Dividend_Tax]       decimal(7,4)  NULL ,
	[Short_Term_Capital_Gains_Tax] decimal(7,4)  NULL ,
	[Long_Term_Capital_Gains_Tax] decimal(7,4)  NULL ,
	[Tax_Jurisdiction_PK] integer  NOT NULL ,
	[Display_to_User_Ind_Y_N] char(1)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [TAX_RATE]
	ADD  PRIMARY KEY  CLUSTERED ([Tax_Rate_PK] ASC)
go

CREATE TABLE [VERSION]
( 
	[Version_PK]         int  NOT NULL  IDENTITY ( 1,1 ) ,
	[Version_Name]       varchar(160) NULL ,
	[AsOf]               datetime  NULL ,
	[Version_Flag]       char(1)   NULL ,
	[Taxability_Ind]     char(1)  NOT NULL ,
	[Active_Ind]         char(1)  NOT NULL ,
	[Active_Ind_TS]      datetime  NOT NULL ,
	[Created_By]         varchar(10)  NOT NULL ,
	[Created_TS]         timestamp  NOT NULL ,
	[Modified_By]        varchar(10)  NOT NULL ,
	[Modified_TS]        datetime  NOT NULL ,
	[Archived_TS]        datetime  NULL 
)
go

ALTER TABLE [VERSION]
	ADD  PRIMARY KEY  CLUSTERED ([Version_PK] ASC)
go
